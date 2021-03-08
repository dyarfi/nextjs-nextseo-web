import Header from '@components/Header';
import Footer from '@components/Footer';

function Default(props) {
  const { pathname, children } = props;

  return (
    <>
      <Header pathname={pathname} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Default;
