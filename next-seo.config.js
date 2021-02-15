const BASE_URL = process.env.BASE_URL;

export default {
  titleTemplate: '%s | Your Website',
  title: 'Your Default Headline Title',
  defaultTitle: 'Your Default Title',
  description: 'Description of your website',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: BASE_URL,
    // site_name: 'SiteName',
  },
  twitter: {
    handle: '@dyarfi',
    site: '@dyarfi',
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
