/* env */
import ENV from './config/env';
/* env vars */
const { BASE_URL, NAME, AUTHOR, STATIC_DIR } = ENV;

// Default Next-Seo meta tags
export default {
  titleTemplate: '%s | Your Website',
  title: 'Your Default Headline Title',
  description: 'Description of your website',
  canonical: BASE_URL,
  openGraph: {
    images: [{ url: `${BASE_URL}${STATIC_DIR}xconnect.jpg` }],
  },
  additionalMetaTags: [
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge; chrome=1',
    },
  ],
};
