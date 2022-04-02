const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyFiles = ['/api/**'];

const apiProxy = createProxyMiddleware(proxyFiles, {
  target: 'https://localhost:3002',
  changeOrigin: true,
  // auth: '',
  // ws: true,
  secure: false,
  cookieDomainRewrite: 'localhost',
  headers: {
    origin: 'https://localhost:3002',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*'
  }
  // onProxyReq: (_proxyReq) => {
  //   console.log('PROXY REQ', _proxyReq)
  // },
  // onProxyRes: (_proxyRes) => {
  //   console.log('PROXY 1', _proxyRes)
  // }
});

module.exports = [apiProxy];
