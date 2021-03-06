module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-transform-runtime',
      {
        regenerator: true
      }
    ]
  ]
};
