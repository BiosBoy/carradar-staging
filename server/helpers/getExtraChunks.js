const getExtraChunks = (manifest, modules) => {
  const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter((asset) => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map((k) => assets[k]);

  return extractAssets(manifest, modules).map(
    (c) => `<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`
  );
};

module.exports = getExtraChunks;
