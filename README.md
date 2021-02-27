# Next.js SEO with Next-SEO Website

Setting up your Next.js website SEO

## Config

Create a file under the name next-seo.config.js:

```javascript
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
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@SiteName',
    site: '@SiteName',
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
