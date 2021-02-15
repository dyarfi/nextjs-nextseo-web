/** components */
import LayoutDefault from '../layouts/Default';
import BlockMainTop from '../components/blocks/BlockMainTop';
import BlockMainBottom from '../components/blocks/BlockMainBottom';

/** seo */
import { DefaultSeo } from 'next-seo';

export default function About(props) {
  const {
    pathname,
    data: { title, description, header, slug, block_top = {} },
  } = props;

  const disc = 4;

  return (
    <>
      <DefaultSeo title={title} description={description} />
      <LayoutDefault pathname={pathname}>
        <BlockMainTop {...{ data: block_top }} />
        <section className="container" id="learn">
          <div className="row mt-5">
            <div className="mx-auto">
              <h2 className="headline-center">About Us</h2>
            </div>
          </div>
          <div className="boxed">
            <div className="col-lg-6 boxed-left-side">
              <h3 className="font-weight-bolder text-uppercase text-success">
                We are the IOT Service Agency
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum quos minus saepe.
              </p>
              <em className="text-muted">Analysis for your IOT Projects</em>
            </div>
            <div className="col-lg-6 boxed-right-side">
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
            </div>
          </div>
        </section>

        <section className="container my-5 pb-5" id="about">
          <div className="row my-5">
            <div className="mx-auto">
              <h2 className="headline-center">Getting Started</h2>
            </div>
          </div>
          <div className="container-fluid">
            <div className="boxed-bottom">
              <div className="boxed-bottom-left col-12 col-md-6 col-lg-4">
                <div className="boxed-bottom-content">
                  <h4 className="font-weight-bolder text-uppercase headline text-muted">
                    Lorem ipsum dolor sit amet.
                  </h4>
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
              </div>
              <div className="boxed-bottom-right col-12 col-md-6 col-lg-4">
                <div className="boxed-bottom-content">
                  <h4 className="font-weight-bolder text-uppercase headline text-muted">
                    Lorem ipsum dolor sit amet.
                  </h4>
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
              </div>
              <div className="boxed-bottom-left col-12 col-md-6 col-lg-4">
                <div className="boxed-bottom-content">
                  <h4 className="font-weight-bolder text-uppercase headline text-muted">
                    Lorem ipsum dolor sit amet.
                  </h4>
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
              </div>
            </div>
          </div>
        </section>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

About.getInitialProps = async ({ ctx }) => {
  const { pathname, err } = ctx;
  const res = await fetch(`${process.env.BASE_URL}/api/about`);
  const json = await res.json();
  return { data: json, pathname, err };
};
