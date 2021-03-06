// next config
import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default {
  /* server */
  JWT_TOKEN: serverRuntimeConfig.jwtToken,
  /* server and client */
  NAME: publicRuntimeConfig.name,
  AUTHOR: publicRuntimeConfig.author,
  BASE_URL: publicRuntimeConfig.baseUrl,
  BASE_API_URL: publicRuntimeConfig.baseApiUrl,
  STATIC_DIR: publicRuntimeConfig.staticFolder,
  BASE_SEO: publicRuntimeConfig.baseSeo,
};
