import React from "react";
import Link from "next/link";

/* routes */
import ROUTES from "../../config/routes";
/* Components */
// import DarkModeToggle from "../DarkModeToggle";

function Footer(props) {
  // console.log(ROUTES.ABOUT.href);
  // return false;

  return (
    <footer>
      <div className="bg-light footer-holder">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-sm-6 col-lg-3">
              <h4 className="text-muted font-weight-bold">Company</h4>
              <ul className="list-links">
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
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3">
              <h4 className="text-muted font-weight-bold">Resources</h4>
              <ul className="list-links">
                <li>
                  <a href="#">Getting Started</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3">
              <h4 className="text-muted font-weight-bold">Developers</h4>
              <ul className="list-links">
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
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a className="navbar-brand ml-3" href="#">
                <i className="text-warning ">//</i>{" "}
                <span className="text-success">IOTA Connect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <p className="text-muted">
                Credits for images goes to Nathan Anderson, Hatsukami Morgan,
                Stephen Dawson, Felipe Faria, rawpixel on{" "}
                <a href="http://unsplash.com/" target="blank">
                  Unsplash.com
                </a>
                .<span className="d-block text-center">Copyright @ 2019</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
