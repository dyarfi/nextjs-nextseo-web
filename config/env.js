// next config
import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig /* , publicRuntimeConfig  */ } = getConfig();

export default {
  NAME: serverRuntimeConfig.name,
  AUTHOR: serverRuntimeConfig.author,
  BASE_URL: serverRuntimeConfig.baseUrl,
  BASE_API_URL: serverRuntimeConfig.baseApiUrl,
};
