// import your default seo configuration
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// global styles
import '../styles/globals.css'
// import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <><DefaultSeo {...SEO} /><Component {...pageProps} /></>
}

export default MyApp