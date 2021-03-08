import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import ROUTES from '@config/routes';

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
                <Link href={ROUTES.INDEX.href} passHref>
                  <a
                    className={`nav-link${
                      pathname === '/' ? ` text-dark` : ''
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </NavItem>
              <NavItem className={`${pathname === '/about' ? `active` : ``}`}>
                <Link href={ROUTES.ABOUT.href} passHref>
                  <a
                    className={`nav-link${
                      pathname === '/about' ? ` text-dark` : ''
                    }`}
                  >
                    About
                  </a>
                </Link>
              </NavItem>
              <NavItem className={`${pathname === '/service' ? `active` : ``}`}>
                <Link href={ROUTES.SERVICE.href} passHref>
                  <a
                    className={`nav-link${
                      pathname === '/service' ? ` text-dark` : ''
                    }`}
                  >
                    Service
                  </a>
                </Link>
              </NavItem>
              <NavItem className={`${pathname === '/contact' ? `active` : ``}`}>
                <Link href={ROUTES.CONTACT.href} passHref>
                  <a
                    className={`nav-link${
                      pathname === '/contact' ? ` text-dark` : ''
                    }`}
                  >
                    Contact
                  </a>
                </Link>
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
