import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import "./navigation.scss";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const closeOffcanvas = () => setExpanded(false);

  return (
    <Navbar className="navbar" expand="lg" expanded={expanded} variant="dark">
      <Container className="p-2">
        <Navbar.Brand>
          <Link to="/" className="navbar__brand">
            <img src="/logo.svg" alt="" />
          </Link>
        </Navbar.Brand>
        <a
          aria-controls="navbar-toggler"
          type="button"
          className="navbar-toggler shadow-none border-0 p-0 navbar-toggler"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </a>
        <Navbar.Offcanvas
          className="navbar__sidebar"
          id="navbar-toggler"
          aria-labelledby="navbar-label-toggler"
          placement="start"
          onHide={closeOffcanvas}
        >
          <Offcanvas.Header className="border-bottom" closeVariant="white">
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={closeOffcanvas}
            ></button>
          </Offcanvas.Header>
          <Offcanvas.Body className="navbar__sidebar-body">
            <Nav className="gap-4">
              <Link
                to="/patchnotes"
                className="nav-link"
                onClick={closeOffcanvas}
              >
                <p className="m-0">Aktualności</p>
              </Link>
              <Link to="/grounds" className="nav-link" onClick={closeOffcanvas}>
                <p className="m-0">Podstawy TFT</p>
              </Link>
              <Link to="/comps" className="nav-link" onClick={closeOffcanvas}>
                <p className="m-0">Kompozycje</p>
              </Link>
              <Link
                to="/team-builder"
                className="nav-link"
                onClick={closeOffcanvas}
              >
                <p className="m-0">Team builder</p>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
