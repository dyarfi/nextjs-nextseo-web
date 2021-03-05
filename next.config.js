// const PROD = process.env.NODE_ENV !== 'development';
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    baseUrl: process.env.BASE_URL,
    baseApiUrl: process.env.API_URL,
    name: 'X CONNECT',
    author: '@dyarfi',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
};
