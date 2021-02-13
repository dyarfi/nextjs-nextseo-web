import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Default(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Default;
