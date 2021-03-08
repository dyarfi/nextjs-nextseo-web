import Header from '@components/Header';
import Footer from '@components/Footer';

function Default(props) {
  const { pathname, children } = props;

  return (
    <>
      <Header pathname={pathname} />
      <main>{children}</main>
      <Footer />
      {process.env.NODE_ENV !== 'development' && (
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-JG2H8KV5EW"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-JG2H8KV5EW');`,
            }}
          />
        </>
      )}
    </>
  );
}

export default Default;
