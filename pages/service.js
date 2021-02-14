/** Reactstrap */
import { Container, Col, Row } from "reactstrap";

/** components */
import LayoutDefault from "../layouts/Default";
// import BlockMainTop from "../components/blocks/BlockMainTop";
import BlockMainBottom from "../components/blocks/BlockMainBottom";

/** seo */
import { DefaultSeo } from "next-seo";

export default function Service(props) {
  const {
    pathname,
    data: { title, description, slug, services, block_top = {} },
  } = props;

  function renderServices() {
    return services.map((service, idx) => {
      const classBoxService = idx % 2 == 1 ? 'service-list__body_right' : 'service-list__body_left';
      return (
        <Row key={`k-${idx}`} className="no-gutters py-5 position-relative">
          <div className="service-list__image">
            <div data-filter="overlay-dark">
              <img
                src={`${service.image}`}
                className="img-fluid"
                alt={`${service.name}`}
              />
            </div>
          </div>
          <Col
            xs="9"
            lg="6"
            className={classBoxService}
          >
            <div className="service-list__content">
              <div className="service-list__overlay">
                <div className="service-list__caption">
                  <h3 className="service-list__headline">{service.name}</h3>
                  <p
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  ></p>
                  <a
                    href={`${service.image}`}
                    className="service-list__link btn btn-outline-secondary btn-lg"
                    data-fancybox="img-menus"
                    data-caption={`${service.name}`}
                  >
                    <h6 className="font-weight-bolder p-0 m-0 text-uppercase">
                      Read More
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      );
    });
  }

  return (
    <>
      <DefaultSeo title={title} description={description} />
      <LayoutDefault pathname={pathname}>
        {/* <BlockMainTop /> */}
        <div className="bg-light py-lg-4">
          <Container><Row>
            <div className="mx-auto"><h2 className="headline-center">Our Services</h2></div>
          </Row>
          </Container>
          <Container>{renderServices()}</Container>
        </div>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

Service.getInitialProps = async ({ ctx }) => {
  const { pathname, err } = ctx;
  const res = await fetch(`${process.env.BASE_URL}/api/service`);
  const json = await res.json();
  return { data: json, pathname, err };
};
