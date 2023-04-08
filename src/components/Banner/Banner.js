import './banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';



export const Banner = () => {
  return (
    <section className="banner" id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} sl={7}>
            <span className='tagline'>Welcome to my porfolio</span>
            <h1>{
              `Hi! My name is Laura and I'm`
            }
              {<br />}
              <div className="type-text ">
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
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, excepturi! Quisquam exercitationem similique neque laudantium reprehenderit nobis eligendi amet adipisci dolor vero vel dolorem, assumenda est quibusdam blanditiis, commodi ad!</p>
            <button onClick={() => console.log('connect')}>Let's connect! <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} ls={5}>
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}