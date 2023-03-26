import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import orejitasCallejeras from '../assets/img/orejitasCallejeras.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState("sobreNosotros")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
      }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={orejitasCallejeras} alt="logo" style={{height: "100px", width: "100px"}}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#sobreNosotros" className={activeLink === "sobreNosotros" ? "active navbar-link" : "navbar-link"} onClick ={() => {onUpdateActiveLink("sobreNosotros")}} >Sobre Nosotros</Nav.Link>
              <Nav.Link href="#animalesRescatados" className={activeLink === "animalesRescatados" ? "active navbar-link" : "navbar-link"} onClick ={() => {onUpdateActiveLink("animalesRescatados")}}>Animales Rescatados</Nav.Link>
              <Nav.Link href="#animalesAdopcion" className={activeLink === "animalesAdopcion" ? "active navbar-link" : "navbar-link"} onClick ={() => {onUpdateActiveLink("animalesAdopcion")}}>Animales en Adopcion</Nav.Link>
              <Nav.Link href="#donaciones" className={activeLink === "donaciones" ? "active navbar-link" : "navbar-link"} onClick ={() => {onUpdateActiveLink("donaciones")}}>Donaciones</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>
            </span>
            <div className="buttonClass">
                <Button variant="outline" href="#contacto" style={{color: "rgba(254,110,172,255)", borderColor: "white", backgroundColor: "white", marginLeft: "20px", fontFamily: "Northwoods, sans-serif"}}>Contacto</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
  
}

