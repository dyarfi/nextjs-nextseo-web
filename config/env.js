// next config
import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// Passed the ENV variables as constants
export default {
  /* server */
  JWT_TOKEN: serverRuntimeConfig.jwtToken,
  /* server and client */
  BASE_URL: publicRuntimeConfig.baseUrl,
  BASE_API_URL: publicRuntimeConfig.baseApiUrl,
  /* default seo */
  BASE_SEO: publicRuntimeConfig.baseSeo,
  /* website global */
  NAME: publicRuntimeConfig.name,
  TITLE: publicRuntimeConfig.title,
  SLOGAN: publicRuntimeConfig.slogan,
  DESCRIPTION: publicRuntimeConfig.description,
  AUTHOR: publicRuntimeConfig.author,
  STATIC_DIR: publicRuntimeConfig.staticFolder,
  IMAGE: publicRuntimeConfig.image,
  IMAGE_SHARE: publicRuntimeConfig.imageShare,
  FACEBOOK_URL: publicRuntimeConfig.facebookUrl,
  TWITTER_URL: publicRuntimeConfig.twitterUrl,
  INSTAGRAM_URL: publicRuntimeConfig.instagramUrl,
  LINKEDIN_URL: publicRuntimeConfig.linkedInUrl,
  PHONE: publicRuntimeConfig.phone,
  ADDRESS: publicRuntimeConfig.address,
  COUNTRY: publicRuntimeConfig.country,
  POSTAL_CODE: publicRuntimeConfig.postalCode,
  LOCALE: publicRuntimeConfig.locale,
};
