/** Reactstrap */
import { Container, Col, Row } from 'reactstrap';

/** components */
import LayoutDefault from '../layouts/Default';
// import BlockMainTop from "../components/blocks/BlockMainTop";
import BlockMainBottom from '../components/blocks/BlockMainBottom';

/** cards */
import ServiceCardBigList from '../components/cards/services/ServiceCardBigList';

/** seo */
import { DefaultSeo } from 'next-seo';
/** next */
import ENV from '../config/env';
/** urls */
const { BASE_URL = '', BASE_API_URL = '' } = ENV;

export default function Service(props) {
  const {
    pathname,
    data: { title, description, slug, services, block_top = {} },
  } = props;

  const seos = {
    title,
    description: description.replace(/(<([^>]+)>)/gi),
    canonical: `${BASE_URL}${pathname}`,
    openGraph: {
      url: 'https://www.url.ie/a',
      title: title,
      description: description.replace(/(<([^>]+)>)/gi),
      images: [
        {
          url: 'https://www.example.ie/og-image-01.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
        {
          url: 'https://www.example.ie/og-image-02.jpg',
          width: 900,
          height: 800,
          alt: 'Og Image Alt Second',
        },
        { url: 'https://www.example.ie/og-image-03.jpg' },
        { url: 'https://www.example.ie/og-image-04.jpg' },
      ],
      // site_name: 'SiteName',
    },
    // twitter:
    // {
    //   handle: '@handle',
    //   site: '@site',
    //   cardType: 'summary_large_image',
    // }
  };

  return (
    <>
      <DefaultSeo {...seos} />
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

Service.getInitialProps = async ({ ctx }) => {
  const { pathname, err } = ctx;
  const res = await fetch(`${BASE_API_URL}/api/service`);
  const json = await res.json();
  return { data: json, pathname, err };
};
