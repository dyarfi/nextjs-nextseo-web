import App from 'next/app';

// global styles
import '@styles/vendors/main.scss';

// seos
import { DefaultSeo, LocalBusinessJsonLd, SocialProfileJsonLd } from 'next-seo';

import SEO from '@next-seo.config';

const { metas, microdatas } = SEO;

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps:
        Component.getInitialProps && (await Component.getInitialProps({ ctx })),
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSeo {...metas} />
        <LocalBusinessJsonLd {...microdatas.LocalBusinessJsonLd} />
        {/* <SocialProfileJsonLd {...microdatas.SocialProfileJsonLd} /> */}
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
