import './banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';
import astronaut from '../../assets/img/astronaut.svg';
import night from '../../assets/img/night.avif'

export const Banner = () => {
  return (
    <section className="banner" id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} sl={7}>
            <span className='tagline'>Welcome to my porfolio</span>
            <h1>
              My name is Laura and I'm a
              {<br />}
              <div className="type-text">
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Web Developer',
                      'Back End Web Developer',
                    ],
                    autoStart: true,
                    loop: true,
                  }} />
              </div>
              {/* <div className='astronaut'>
                <img src={astronaut} alt="astronaut" width={'250px'}/>
              </div> */}
            </h1>

          </Col>



          <Col xs={12} md={6} ls={5}>
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}