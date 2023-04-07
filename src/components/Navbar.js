import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo3.png'
import navIcon1 from '../assets/img/nav-icon1.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="md" variant='dark' className={scrolled ? 'scrolled' : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Collapse className='buttons' id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="home"
              className={activeLink === 'home' ? 'active nav-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link href="projects"
              className={activeLink === 'projects' ? 'active nav-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}>
              Projects
            </Nav.Link>
            <Nav.Link href="about-me"
              className={activeLink === 'about-me' ? 'active nav-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('about-me')}>
              About me
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon' >
              <a href="https://www.linkedin.com/in/lauracolof/" target="_blank" rel="noreferrer"> LinkedIn </a>
            </div>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
