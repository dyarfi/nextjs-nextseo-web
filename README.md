# Next.js SEO with Next-SEO Website

Setting up your Next.js website SEO with Next-Seo meta and microdatas.

## Config

Create `.env.local` put these variables:

```env
# env
BASE_URL=http://localhost:3000
API_URL=http://localhost:3000
STATIC_DIR=/

# seos
NAME=TheStartUp
TITLE=Title of the Website
DESCRIPTION=Descriptive of the website
SLOGAN=Cool Website Slogan
ADDRESS=Typograph Road, Lorem Ipsum Street No. 404
REGION=CA
PHONE=+199999999
IMAGE=xconnect.jpg
AUTHOR=@thestartup

# socmed
FACEBOOK_URL=https://bussiness.facebook.com/thestartup
TWITTER_URL=https://twitter.com/thestartup
INSTAGRAM_URL=https://instagram.com/thestartup
LINKEDIN_URL=https://linkedin.com/thestartup

# locale
COUNTRY=Indonesia
POSTAL_CODE=999999
LOCALE=en-US
```

Create a file under the name `next-seo.config.js`:

```javascript
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
```

Put an import on `next-seo` in your pages and set up the SEO objects, and display it in components.

```javascript
/** seo */
import { DefaultSeo } from 'next-seo';

function Home(props) {
  const seos = {
    title,
    description: description.replace(/(<([^>]+)>)/gi, ''),
    canonical: `${BASE_URL}`,
    openGraph: {
      url: 'https://www.url.ie/a',
      title: title,
      description: description.replace(/(<([^>]+)>)/gi, ''),
      images: [
        {
          url: 'https://www.example.ie/og-image-01.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
        {
          url: 'https://www.example.ie/og-image-02.jpg',
          width: 900,
          height: 800,
          alt: 'Og Image Alt Second',
        },
        { url: 'https://www.example.ie/og-image-03.jpg' },
        { url: 'https://www.example.ie/og-image-04.jpg' },
      ],
      site_name: 'SiteName',
    },
    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
    },
  };

  return (
    <>
      <DefaultSeo {...seos} />
      <LayoutDefault props={props}></LayoutDefault>
    </>
  );
}
```

Develoment:

```
yarn dev
```

Production:

```
yarn build && yarn start
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
