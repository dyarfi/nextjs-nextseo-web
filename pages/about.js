/** reactstrap */
import { Container, Col, Row } from 'reactstrap';

/** components */
import LayoutDefault from '@layouts/Default';
import BlockMainTop from '@components/blocks/BlockMainTop';
import BlockMainBottom from '@components/blocks/BlockMainBottom';

/** seo */
import { NextSeo } from 'next-seo';
/** env */
import ENV from '@config/env';
/** vars */
const {
  BASE_URL = '',
  BASE_API_URL = '',
  BASE_SEO = '',
  STATIC_DIR = '',
  AUTHOR,
} = ENV;

function About(props) {
  const {
    pathname,
    data: {
      title,
      metaTitle,
      description,
      metaDescription,
      header,
      slug,
      block_top = {},
    },
  } = props;

  const disc = 4;
  const SEOS = {
    title,
    description: metaDescription.replace(/(<([^>]+)>)/gi, ''),
    canonical: `${BASE_URL}${pathname}`,
    openGraph: [
      {
        url: BASE_URL,
        images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
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
        <Container tag="section" id="learn">
          <Row className="mt-5">
            <div className="mx-auto">
              <h2 className="headline-center">About Us</h2>
            </div>
          </Row>
          <div className="boxed">
            <Col lg={6} className="boxed-left-side">
              <h3 className="font-weight-bolder text-uppercase text-success">
                We are the IOT Service Agency
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum quos minus saepe.
              </p>
              <em className="text-muted">Analysis for your IOT Projects</em>
            </Col>
            <Col lg={6} className="boxed-right-side">
              <h3 className="font-weight-bolder text-uppercase text-success">
                Connected, Collect and Analyze
              </h3>
              <blockquote>
                <p className="lead">
                  Weather stations, motion detections or heat maps with any
                  sensor on connected devices
                </p>
                <cite className="text-muted">
                  &mdash; We covered all your dashboard analytics data
                </cite>
              </blockquote>
            </Col>
          </div>
        </Container>
        <Container tag="section" className="my-5 pb-5" id="about">
          <Row className="my-5">
            <div className="mx-auto">
              <h2 className="headline-center">Getting Started</h2>
            </div>
          </Row>
          <Container fluid>
            <div className="boxed-bottom">
              <Col xs={12} md={6} lg={4} className="boxed-bottom-left">
                <div className="boxed-bottom-content">
                  <h3 className="font-weight-bold text-uppercase headline text-muted">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <h4>Learn More About IOTA Connect</h4>
                  <p className="text-justify">
                    IOTA Connect is an IoT analytics platform service that
                    allows you to aggregate, visualize and analyze live data
                    streams in the cloud. IOTA Connect provides instant
                    visualizations of data posted by your devices to IOTA
                    Connect. With the ability to execute MATLAB® code in IOTA
                    Connect you can perform online analysis and processing of
                    the data as it comes in. IOTA Connect is often used for
                    prototyping and proof of concept IoT systems that require
                    analytics.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} className="boxed-bottom-right">
                <div className="boxed-bottom-content">
                  <h3 className="font-weight-bold text-uppercase headline text-muted">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <h4>What is IoT?</h4>
                  <p className="text-justify">
                    Internet of Things (IoT) describes an emerging trend where a
                    large number of embedded devices (things) are connected to
                    the Internet.
                    <br />
                    <br />
                    IoT solutions are built for many vertical applications such
                    as environmental monitoring and control, health monitoring,
                    vehicle fleet monitoring, industrial monitoring and control,
                    and various home automation.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} className="boxed-bottom-left">
                <div className="boxed-bottom-content">
                  <h3 className="font-weight-bold text-uppercase headline text-muted">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <h4>Learn More About IOTA Connect</h4>
                  <p className="text-justify">
                    IOTA Connect is an IoT analytics platform service that
                    allows you to aggregate, visualize and analyze live data
                    streams in the cloud. IOTA Connect provides instant
                    visualizations of data posted by your devices to IOTA
                    Connect. With the ability to execute MATLAB® code in IOTA
                    Connect you can perform online analysis and processing of
                    the data as it comes in. IOTA Connect is often used for
                    prototyping and proof of concept IoT systems that require
                    analytics.
                  </p>
                </div>
              </Col>
            </div>
          </Container>
        </Container>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${BASE_API_URL}/api/about`);
  const json = await res.json();

  return { props: { data: json, pathname: resolvedUrl } };
}

export default About;
