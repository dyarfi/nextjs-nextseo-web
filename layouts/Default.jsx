import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

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
