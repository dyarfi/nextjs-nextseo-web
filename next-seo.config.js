/* env */
import ENV from './config/env';
/* env vars */
const {
  BASE_URL,
  NAME,
  TITLE,
  SLOGAN,
  DESCRIPTION,
  AUTHOR,
  STATIC_DIR,
  IMAGE,
  FACEBOOK_URL,
  TWITTER_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PHONE,
  ADDRESS,
  COUNTRY,
  POSTAL_CODE,
  LOCALE,
} = ENV;

// Default Next-Seo meta tags
export default {
  // Default meta tags
  metas: {
    titleTemplate: `%s | ${NAME}`,
    title: TITLE,
    description: DESCRIPTION,
    canonical: BASE_URL,
    openGraph: {
      images: [{ url: `${BASE_URL}${STATIC_DIR}${IMAGE}` }],
    },
    twitter: {
      handle: '@handle',
      site: AUTHOR,
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1',
      },
      {
        name: 'theme-color',
        content: '#ffc107',
      },
    ],
  },
  // Default json-ld microdata
  microdatas: {
    LocalBusinessJsonLd: {
      type: 'Organization',
      id: `${BASE_URL}/#organization`,
      name: NAME,
      description: DESCRIPTION,
      url: BASE_URL,
      telephone: PHONE,
      address: [
        {
          streetAddress: '1600 Saratoga Ave',
          addressLocality: 'San Jose',
          addressRegion: 'CA',
          postalCode: '95129',
          addressCountry: 'US',
        },
      ],
      logo: {
        type: 'ImageObject',
        id: `${BASE_URL}/#logo`,
        inLanguage: LOCALE,
        url: `${BASE_URL}${IMAGE}`,
        width: 112,
        height: 112,
        caption: NAME,
      },
      image: {
        id: `${BASE_URL}#logo`,
      },
      sameAs: [FACEBOOK_URL, TWITTER_URL, INSTAGRAM_URL, LINKEDIN_URL],
      address: {
        type: 'PostalAddress',
        streetAddress: ADDRESS,
        addressLocality: COUNTRY,
        postalCode: POSTAL_CODE,
        addressCountry: COUNTRY,
      },
      telephone: PHONE,
      slogan: SLOGAN,
      description: DESCRIPTION,
    },
    SocialProfileJsonLd: {
      type: 'Person',
      name: AUTHOR,
      url: BASE_URL,
      sameAs: [FACEBOOK_URL, TWITTER_URL, INSTAGRAM_URL, LINKEDIN_URL],
    },
  },
};
