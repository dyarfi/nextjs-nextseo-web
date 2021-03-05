import ENV from './config/env';
const { BASE_URL, NAME, AUTHOR } = ENV;

export default {
  titleTemplate: '%s | Your Website',
  title: 'Your Default Headline Title',
  defaultTitle: 'Your Default Title',
  description: 'Description of your website',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: BASE_URL,
    site_name: NAME,
  },
  twitter: {
    handle: AUTHOR,
    site: AUTHOR,
    cardType: 'summary_large_image',
  },
  robots: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: 'none',
    maxVideoPreview: -1,
  },
};
