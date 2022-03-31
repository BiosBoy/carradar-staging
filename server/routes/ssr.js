const path = require('path');
const fs = require('fs');

const React = require('react');
const { renderToString } = require('react-dom/server');
const { frontloadServerRender } = require('react-frontload');
const { Helmet } = require('react-helmet');

const ReactEntrypoint = require('../react-entrypoint/index');

const injectHTML = require('../helpers/injectHTML');
const createStore = require('../../src/store/createStore');
const getExtraChunks = require('../helpers/getExtraChunks');

const manifest = require('../../public/assets-manifest');

const helmet = Helmet.renderStatic();

const ssr = async (_req, res) => {
  const indexFile = path.resolve(__dirname, '../../public/view.html');
  const htmlData = await fs.readFileSync(indexFile, 'utf8');

  const context = {};
  const modules = [];

  if (!indexFile) {
    console.error('Read error', indexFile);

    return res.status(404).end();
  }

  const App = (
    <ReactEntrypoint
      url='/'
      store={createStore.default.store}
      history={createStore.default.history}
      modules={modules}
      context={context}
    />
  );

  const appToProcess = await frontloadServerRender(() => renderToString(App));
  const routeMarkup = await appToProcess;

  const html = injectHTML(htmlData, {
    htmlAttr: helmet.htmlAttributes.toString(),
    title: helmet.title.toString(),
    meta: helmet.meta.toString(),
    body: routeMarkup,
    scripts: getExtraChunks(manifest, modules),
    state: JSON.stringify(createStore.default.store.getState()).replace(/</g, '\\u003c')
  });

  res.send(html);
};

module.exports = ssr;
