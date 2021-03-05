import React, { useState } from 'react';
import Image from 'next/image';
import NavLink from '../ui/NavLink';
import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';

/* routes */
import ROUTES from '../../config/routes';

function Header(props) {
  const { pathname } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onBlur = (e) => {
    setIsOpen(false);
  };

  const classOpen = !isOpen ? 'hidden' : '';

  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const toggleNavbar = () => setIsOpenNavbar(!isOpenNavbar);

  return (
    <header>
      <Navbar tag="nav" light expand="md" className="shadow-sm py-0">
        <Container fluid>
          <NavbarBrand className="ml-0 pt-2 pb-0 mb-0" href="/">
            <Image
              src="/xconnect.jpg"
              alt="Logo"
              width={168}
              height={64}
              layout="fixed"
              objectFit="contain"
              style={{ verticalAlign: 'middle' }}
            />
          </NavbarBrand>
          <NavbarToggler
            tag="button"
            onClick={toggleNavbar}
            className="text-white"
          />
          <Collapse
            tag="nav"
            isOpen={isOpenNavbar}
            navbar
            id="navbarSupportedContent"
          >
            <Nav className="navbar-nav ml-auto text-right font-weight-bold">
              <NavItem className={`${pathname === '/' ? `active` : ``}`}>
                <NavLink
                  href={ROUTES.INDEX.href}
                  as={ROUTES.INDEX.url}
                  activeClassName={pathname === '/' && 'text-dark'}
                  {
                    ...{
                      // href: ROUTES.INDEX.href,
                      // as: ROUTES.INDEX.url,
                    }
                  }
                >
                  <a className="nav-link">Home</a>
                </NavLink>
              </NavItem>
              <NavItem className={`${pathname === '/about' ? `active` : ``}`}>
                <NavLink
                  href={ROUTES.ABOUT.href}
                  as={ROUTES.ABOUT.url}
                  activeClassName={pathname === '/about' && 'text-dark'}
                  {
                    ...{
                      // href: ROUTES.ABOUT.href,
                      // as: ROUTES.ABOUT.url
                    }
                  }
                >
                  <a className="nav-link">About</a>
                </NavLink>
              </NavItem>
              <NavItem className={`${pathname === '/service' ? `active` : ``}`}>
                <NavLink
                  href={ROUTES.SERVICE.href}
                  as={ROUTES.SERVICE.url}
                  activeClassName={pathname === '/service' && 'text-dark'}
                  {
                    ...{
                      // href: ROUTES.SERVICE.href,
                      // as: ROUTES.SERVICE.url
                    }
                  }
                >
                  <a className="nav-link">Service</a>
                </NavLink>
              </NavItem>
              <NavItem className={`${pathname === '/contact' ? `active` : ``}`}>
                <NavLink
                  href={ROUTES.CONTACT.href}
                  as={ROUTES.CONTACT.url}
                  activeClassName={pathname === '/contact' && 'text-dark'}
                  {
                    ...{
                      // href: ROUTES.CONTACT.href,
                      // as: ROUTES.CONTACT.url
                    }
                  }
                >
                  <a className="nav-link">Contact</a>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        <div className="navbar-bg-holder"></div>
      </Navbar>
    </header>
  );
}

export default Header;
