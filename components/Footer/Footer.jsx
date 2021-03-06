import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

/** reactstrap */
import { Container, Col, Row, Nav } from 'reactstrap';

/* routes */
import ROUTES from '../../config/routes';

function Footer(props) {
  return (
    <footer>
      <div className="bg-light footer-holder">
        <Container>
          <Row className="mx-auto">
            <Col sm={6} lg={3}>
              <h4 className="text-muted font-weight-bold">Company</h4>
              <Nav vertical tag="ul" className="list-links">
                <li>
                  <Link {...{ href: ROUTES.INDEX.href, as: ROUTES.INDEX.url }}>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link {...{ href: ROUTES.ABOUT.href, as: ROUTES.ABOUT.url }}>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link
                    {...{ href: ROUTES.SERVICE.href, as: ROUTES.SERVICE.url }}
                  >
                    <a>Service</a>
                  </Link>
                </li>
                <li>
                  <Link
                    {...{ href: ROUTES.CONTACT.href, as: ROUTES.CONTACT.url }}
                  >
                    <a>Contact</a>
                  </Link>
                </li>
              </Nav>
            </Col>
            <Col sm={6} lg={3}>
              <h4 className="text-muted font-weight-bold">Resources</h4>
              <Nav vertical as="ul" className="list-links">
                <li>
                  <Link
                    {...{
                      href: ROUTES.GETTING_STARTED.href,
                      as: ROUTES.GETTING_STARTED.url,
                    }}
                  >
                    <a>Getting Started</a>
                  </Link>
                </li>
                <li>
                  <Link
                    {...{
                      href: ROUTES.DOCUMENTATION.href,
                      as: ROUTES.DOCUMENTATION.url,
                    }}
                  >
                    <a>Documentation</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </Nav>
            </Col>
            <Col sm={6} lg={3}>
              <h4 className="text-muted font-weight-bold">Developers</h4>
              <Nav vertical tag="ul" className="list-links">
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
                <li>
                  <a href="#">Slack</a>
                </li>
                <li>
                  <a href="#">Gitter</a>
                </li>
              </Nav>
            </Col>
            <Col sm={6} lg={3} size={{}}>
              <a className="navbar-brand ml-3" href="#">
                {/* <i className="text-warning ">//</i>{" "}
                <span className="text-success">IOTA Connect</span> */}
                <Image
                  src="/xconnect.jpg"
                  alt="Logo"
                  width={158}
                  height={54}
                  layout="fixed"
                  objectFit="contain"
                  style={{ verticalAlign: 'middle' }}
                />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <Container>
          <Row>
            <div className="mx-auto">
              <p className="text-muted">
                Credits for images goes to Nathan Anderson, Hatsukami Morgan,
                Stephen Dawson, Felipe Faria, rawpixel on{' '}
                <a href="http://unsplash.com/" target="blank">
                  Unsplash.com
                </a>
                .<span className="d-block text-center">Copyright @ 2019</span>
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
