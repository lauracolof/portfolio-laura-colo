import React, { useState, useEffect } from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//fonts and images
import logop from '../../assets/img/logop.png'
import navIcon from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';



export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateAvtiveLink = (value) =>
    setActiveLink(value);


  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>

        <Nav className="me-auto">
          <img src={logop} alt="logolc" className='logoimg' />
          <Nav.Link href="home"
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateAvtiveLink('home')}>
            Home
          </Nav.Link>
          <Nav.Link href="about-me"
            className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateAvtiveLink('about-me')}>
            About me
          </Nav.Link>
          <Nav.Link href="projects"
            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateAvtiveLink('projects')}>
            Projects
          </Nav.Link>
        </Nav>

        <span className='navbar-text'>
          <div className='social-icon'>
            <a href="https://www.linkedin.com/in/lauracolof"
              target='_blank'
              rel='noreferrer'
              className='link-icon'>
              <img src={navIcon} alt='linkedin' />
            </a>
          </div>
          <div className='social-icon2'>
            <a href="https://github.com/lauracolof"
              target='_blank'
              rel='noreferrer'
              className='github-icon'>
              <img src={navIcon2} alt='github' />
            </a>
          </div>

          <button onClick={() => console.log('connectME')}>
            Let's connect
          </button>
        </span>

      </Container>
    </Navbar>
  );

}