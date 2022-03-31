const injectHTML = (incomingData, { htmlAttr, title, meta, scripts, body, state }) => {
  const data = JSON.parse(JSON.stringify(incomingData));

  const dataWithHTMLAttr = data.replace('<html>', `<html ${htmlAttr}>`);
  const dataWithTitle = dataWithHTMLAttr.replace(/<title>.*?<\/title>/g, title);
  const dataWithHead = dataWithTitle.replace('</head>', `${meta}</head>`);
  const dataWithBody = dataWithHead.replace(
    '<div id="react-app-root"></div>',
    `<div id="react-ssr-app-root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>${scripts.join(
      ''
    )}`
  );

  return dataWithBody;
};

module.exports = injectHTML;
