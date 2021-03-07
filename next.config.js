module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secretKey: 'secretKey',
    jwtToken: 'JwtToken',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    // Pass through env variables
    baseUrl: process.env.BASE_URL,
    baseApiUrl: process.env.API_URL,
    staticFolder: process.env.STATIC_DIR,
    // Will be used for per SEO page default
    baseSeo: {
      robotsProps: {
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      },
    },
    name: process.env.NAME,
    title: process.env.TITLE,
    slogan: process.env.SLOGAN,
    description: process.env.DESCRIPTION,
    author: process.env.AUTHOR,
    image: process.env.IMAGE,
    facebookUrl: process.env.FACEBOOK_URL,
    twitterUrl: process.env.TWITTER_URL,
    instagramUrl: process.env.INSTAGRAM_URL,
    linkedInUrl: process.env.LINKEDIN_URL,
    phone: process.env.PHONE,
    address: process.env.ADDRESS,
    region: process.env.REGION,
    country: process.env.COUNTRY,
    postalCode: process.env.POSTAL_CODE,
    locale: process.env.LOCALE,
  },
};
