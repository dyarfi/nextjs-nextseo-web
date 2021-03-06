import App from 'next/app';

// seos
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

// global styles
import '../styles/vendors/main.scss';

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
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
