/** Reactstrap */
import { Container, Col, Row } from "reactstrap";

/** components */
import LayoutDefault from "../layouts/Default";
import BlockMainTop from "../components/blocks/BlockMainTop";
import BlockMainBottom from "../components/blocks/BlockMainBottom";

/** seo */
import { DefaultSeo } from "next-seo";

function Home(props) {
  const {
    data: { title, description, packages = [], services = [], block_top = {} },
  } = props;

  const disc = 4;

  function renderServices() {
    return services.map((service, idx) => {
      const classBoxService = idx % 2 == 1 ? 'service-list__home-right' : 'service-list__home-left';
      const classBoxOrder = idx % 2 == 1 ? '' : 'order-md-2';
      const classBoxAlign = idx % 2 == 1 ? 'text-right' : 'order-md-1';
      return (
        <Row
          key={`s-${idx}`}
          className={`mb-5 pb-5 ${classBoxService}`}
        >
          <Col
            md="8"
            className={`${classBoxOrder}`}
          >
            <h4 className="mm-heading font-weight-bolder">
              {service.title.replace(/(<([^>]+)>)/gi, "")}
            </h4>
            <p className="text-muted">
              {service.description.replace(/(<([^>]+)>)/gi, "")}
            </p>
          </Col>
          <Col md="4"
            className={`${classBoxAlign}`}
          >
            <a href="service.html">
              <img
                alt={`${service.title.replace(/(<([^>]+)>)/gi, "")}`}
                className="img-thumbnail img-fluid mx-auto"
                src={`${service.image}`}
                data-src="holder.js/100px240/auto"
              />
            </a>
          </Col>
        </Row>
      );
    });
  }

  function renderPackages() {
    return packages.map((packaged, idx) => {
      return (
        <Col xs="12" sm="6" md="6" lg="3" key={`p-${idx}`} className="position-relative mx-auto">
          <div className="card mb-4">
            <div className="card-header">
              <h4 className="card-title m-0 p-0 font-weight-bolder text-secondary">
                {packaged.title}
              </h4>
            </div>
            <div className="card-body text-left">
              <p className="card-text">{packaged.description}</p>
              <span className="font-lead-base font-weight-bold text-muted">
                {disc}0% Off!
                </span>
              <div className="promotion-promo">$ {packaged.price}</div>
              <div className="promotion-price">
                <div className="promotion-price-desc">Now</div>
                <div className="promotion-price-text">
                  $ {packaged.price - (disc % 100)}
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-warning">
                Order
                </a>
            </div>
          </div>
        </Col>
      );
    });
  }

  return (
    <>
      <DefaultSeo title={title} description={description.replace(/(<([^>]+)>)/gi, "")} />
      <LayoutDefault>
        <BlockMainTop {...{ data: block_top }} />
        <section className="container">
          <Row>
            <div className="mx-auto">
              <h3 className="headline-center">Our Services</h3>
            </div>
          </Row>
          <div className="mt-5 pt-5">{renderServices()}</div>
        </section>
        <section className="container">
          <Row>
            <div className="mx-auto">
              <h3 className="headline-center">Our Packages</h3>
            </div>
          </Row>
          <div className="text-center my-5 py-5">
            <div className="card-deck no-gutters">
              {renderPackages()}
            </div>
          </div>
        </section>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`${process.env.BASE_URL}/api`);
  const json = await res.json();

  return { data: json };
};

export default Home;
