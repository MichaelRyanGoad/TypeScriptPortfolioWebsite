import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import LIP from "../Pages/PageAssets/LinkedinLogo.png";
import GML from "../Pages/PageAssets/MailLogo.png";
import GHL from "../Pages/PageAssets/GHLogo.png";

const HeaderNav = () => (
  <>
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">M.R.G.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="navlink">
            Home
          </Nav.Link>
          <NavDropdown
            className="navlink"
            title="Projects"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/projects/sortingvis" className="navlink">
              React Data Sorting Visual
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://github.com/MichaelRyanGoad/OSRS_DATA_SCRAPER"
              className="navlink"
            >
              OSRS Data Scraper
            </NavDropdown.Item>
            <NavDropdown.Item href="/projects/fizzbuzz" className="navlink">
              React FizzBuzz
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://randomroyale222.herokuapp.com/"
              className="navlink"
            >
              Random Royale Website
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Navbar.Brand href="https://www.linkedin.com/in/M-R-G/">
            <img height="30" width="30" src={LIP} alt="Linkedin Logo" />{" "}
            Linkedin
          </Navbar.Brand>

          <Navbar.Brand href="mailto:michael.ryan.goad@gmail.com">
            <img src={GML} height="30" width="40" alt="Gmail Logo" /> Email
          </Navbar.Brand>

          <Navbar.Brand href="https://github.com/MichaelRyanGoad">
            <img height="30" width="30" src={GHL} alt="GitHub Logo" /> GitHub
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default HeaderNav;
