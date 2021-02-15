const PROD = process.env.NODE_ENV !== 'development';
module.exports = {
  env: {
    NAME: 'X CONNECT',
    BASE_URL: !PROD ? 'http://localhost:3000' : 'http://localhost:3000',
  },
}