// const PROD = process.env.NODE_ENV !== 'development';
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    // Pass through env variables
    secretKey: process.env.SECRET_KEY,
    jwtToken: process.env.JWT_TOKEN,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    baseUrl: process.env.BASE_URL,
    baseApiUrl: process.env.API_URL,
    name: 'X CONNECT',
    author: '@dyarfi',
    staticFolder: '/',
    // Will be used for per SEO page default
    baseSeo: {
      robotsProps: {
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      },
    },
  },
};
