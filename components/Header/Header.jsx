import React, { useState } from "react";
import NavLink from "../ui/NavLink";

/* routes */
import ROUTES from "../../config/routes";

/* Components */
// import DarkModeToggle from "../DarkModeToggle";

function Header(props) {
  const { pathname } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onBlur = (e) => {
    setIsOpen(false);
  };

  const classOpen = !isOpen ? "hidden" : "";
  // console.log(props);
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light shadow-sm">
        <div className="container-fluid font-weight-bold">
          <a className="navbar-brand ml-3" href="/">
            <i className="text-warning ">//</i>{" "}
            <span className="text-success">IOTA Connect</span>
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-right">
              <li className={`nav-item ${ pathname === '/' ? `active`:``}`}>
                <NavLink {...{ href: ROUTES.INDEX.href, as: ROUTES.INDEX.url }}>
                  <a className="nav-link">Home</a>
                </NavLink>
              </li>
              <li className={`nav-item ${ pathname === '/about' ? `active`:``}`}>
                <NavLink {...{ href: ROUTES.ABOUT.href, as: ROUTES.ABOUT.url }}>
                  <a className="nav-link">About</a>
                </NavLink>
              </li>
              <li className={`nav-item ${ pathname === '/service' ? `active`:``}`}>
                <NavLink
                  {...{ href: ROUTES.SERVICE.href, as: ROUTES.SERVICE.url }}
                >
                  <a className="nav-link">Service</a>
                </NavLink>
              </li>
              <li className={`nav-item ${ pathname === '/contact' ? `active`:``}`}>
                <NavLink
                  {...{ href: ROUTES.CONTACT.href, as: ROUTES.CONTACT.url }}
                >
                  <a className="nav-link">Contact</a>
                </NavLink>
              </li>
              {/* <li>{pathname}</li> */}
            </ul>
          </div>
        </div>
        <div className="navbar-bg-holder"></div>
      </nav>
    </header>
  );
}

export default Header;
