import './aboutme.css';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const AboutMe = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='about-me' id='aboutme'>
      <Container>
        <Row>
          <Col>
            <div className='aboutme-bx'>
              <h2>
                About me
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam, quasi voluptate voluptatem adipisci suscipit porro perferendis delectus? Maiores delectus numquam iure deleniti facilis adipisci illo odio alias ullam vel.</p>
              <Carousel responsive={responsive} infinite={true} className='about-slider'>
                <div>
                  <img src={''} alt="lauracolo" />
                  <h5>Who I am?</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium impedit placeat provident consequuntur.</p>
                  <h5>What am I looking for?</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis et.</p>
                  <h5>Studies</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                  </p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  )
} 