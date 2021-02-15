// import your default seo configuration
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
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
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
