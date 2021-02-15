import React, { useState } from 'react';

/** reactstrap */
import { Col, Row, Alert } from 'reactstrap';

/** components */
import LayoutDefault from '../layouts/Default';
import BlockMainTop from '../components/blocks/BlockMainTop';
import BlockMainBottom from '../components/blocks/BlockMainBottom';

/** cards */
import ServiceCardList from '../components/cards/services/ServiceCardList';
import PackageCardList from '../components/cards/packages/PackageCardList';

/** seo */
import { DefaultSeo } from 'next-seo';

const BASE_URL = process.env.BASE_URL;

function Home(props) {
  const {
    pathname,
    data: { title, description, packages = [], services = [], block_top = {} },
  } = props;

  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  const seos = {
    title,
    description: description.replace(/(<([^>]+)>)/gi, ''),
    canonical: `${BASE_URL}`,
    openGraph: {
      url: 'https://www.url.ie/a',
      title: title,
      description: description.replace(/(<([^>]+)>)/gi, ''),
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
        <BlockMainTop {...{ data: block_top }} />
        <section className="container">
          <Row>
            <div className="mx-auto">
              <h3 className="headline-center">Our Services</h3>
            </div>
          </Row>
          <div className="mt-5 pt-5">
            <ServiceCardList itemList={services} />
          </div>
        </section>
        <section className="container">
          <Row>
            <div className="mx-auto">
              <h3 className="headline-center">Our Packages</h3>
            </div>
          </Row>
          <div className="text-center my-5 py-5">
            <div className="card-deck no-gutters">
              <PackageCardList itemList={packages} />
            </div>
          </div>
        </section>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

Home.getInitialProps = async ({ ctx }) => {
  const { pathname, err } = ctx;
  const res = await fetch(`${process.env.BASE_URL}/api`);
  const json = await res.json();
  // console.log(process.env.NAME);
  return { data: json, pathname, err };
};

export default Home;
