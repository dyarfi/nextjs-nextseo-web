import React, { useState } from 'react';

/** reactstrap */
import { Container, Col, Row, Alert } from 'reactstrap';

/** components */
import LayoutDefault from '../layouts/Default';
import BlockMainTop from '../components/blocks/BlockMainTop';
import BlockMainBottom from '../components/blocks/BlockMainBottom';

/** cards */
import ServiceCardList from '../components/cards/services/ServiceCardList';
import PackageCardList from '../components/cards/packages/PackageCardList';

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

function Home(props) {
  const {
    pathname,
    data: {
      title,
      metaTitle,
      description,
      metaDescription,
      packages = [],
      services = [],
      block_top = {},
    },
  } = props;

  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  const SEOS = {
    title: title,
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
        <BlockMainTop items={block_top} />
        <Container tag="section">
          <Row>
            <div className="mx-auto">
              <h3 className="headline-center">Our Services</h3>
            </div>
          </Row>
          <div className="mt-5 pt-5">
            <ServiceCardList itemList={services} />
          </div>
        </Container>
        <Container tag="section">
          <Row>
            <div className="mx-auto">
              <h3 className="headline-center">Our Packages</h3>
            </div>
          </Row>
          <Container className="text-center mt-3 mb-5">
            <Row>
              <PackageCardList itemList={packages} />
            </Row>
          </Container>
        </Container>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${BASE_API_URL}/api`);
  const json = await res.json();
  return { props: { data: json, pathname: resolvedUrl } };
}

export default Home;
