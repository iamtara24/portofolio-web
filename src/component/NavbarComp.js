import React, {useState, useEffect} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import logoClient from "../assets/img/client-logo.png";

const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 3) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect (() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className="sticky-top navbar-mobile">
      <Navbar expand="lg" variant='transparent' className={changeColor ? 'navbar-scroll' : ""}>
        <Container>
          <Navbar.Brand href="#home">
              <img src={logoClient} className="d-inline-block align-top" alt="" height="60px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='fw-bold text-uppercase text-custom'>Home</Nav.Link>
              <Nav.Link href="#about" className='fw-bold text-uppercase text-custom'>About</Nav.Link>
              <Nav.Link href="#skill" className='fw-bold text-uppercase text-custom'>Skills</Nav.Link>
              <Nav.Link href="#experience" className='fw-bold text-uppercase text-custom'>Experience</Nav.Link>
              <Nav.Link href="#project" className='fw-bold text-uppercase text-custom'>Project</Nav.Link>
              <Nav.Link href="#contact" className='fw-bold text-uppercase text-custom'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComp