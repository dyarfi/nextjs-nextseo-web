/** Reactstrap */
import { Container, Col, Row } from 'reactstrap';

/** components */
import LayoutDefault from '../layouts/Default';
// import BlockMainTop from "../components/blocks/BlockMainTop";
import BlockMainBottom from '../components/blocks/BlockMainBottom';

/** cards */
import ServiceCardBigList from '../components/cards/services/ServiceCardBigList';

/** seo */
import { NextSeo } from 'next-seo';
/** env */
import ENV from '../config/env';
/** vars */
const {
  BASE_URL = '',
  BASE_API_URL = '',
  BASE_SEO = '',
  STATIC_DIR = '',
  AUTHOR,
} = ENV;

function Service(props) {
  const {
    pathname,
    data: {
      title,
      metaTitle,
      description,
      metaDescription,
      slug,
      services,
      block_top = {},
    },
  } = props;

  const SEOS = {
    title,
    description: metaDescription,
    canonical: `${BASE_URL}${pathname}`,
    openGraph: [
      {
        url: BASE_URL,
        images: { url: `${BASE_URL}${STATIC_DIR}xconnect.jpg` },
        site_name: AUTHOR,
      },
    ],
    ...BASE_SEO,
  };

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        {/* <BlockMainTop /> */}
        <div className="bg-light py-lg-4">
          <Container>
            <Row>
              <div className="mx-auto">
                <h2 className="headline-center">Our Services</h2>
              </div>
            </Row>
          </Container>
          <Container>
            <ServiceCardBigList itemList={services} />
          </Container>
        </div>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${BASE_API_URL}/api/service`);
  const json = await res.json();
  return { props: { data: json, pathname: resolvedUrl } };
}

export default Service;
