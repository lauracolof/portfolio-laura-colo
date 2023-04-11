import './projects.css'
import Carousel from 'react-bootstrap/Carousel';
import landing from '../../assets/img/landingong.png'
import home from '../../assets/img/homeong.png'
import home1 from '../../assets/img/homeong1.png'

function Carrousel() {
  return (
    <div className='general' id='projects'>
      <div className='text'>
        <h2>Projects</h2>
        <h5 className='buddy'>
          Buddy ONG 
        </h5>
        <h6>Design and development</h6>
        <p className='description'>
        This is the team project with which we approved Henry bootcamp  is a Web App, that allow users to view information about different animals for adoption, lost or found, and includes images and detailed descriptions of them. <br /> The Front End is built with React, JavaScript, Redux, ChakraUI and connects to Back End developed with Node.js, TypeScript, TypeORM and PostgreSQL.
        </p>
      </div> 

      <Carousel>
        <Carousel.Item className='carousel-item' interval={1000}>
          <img
            className="d-block w-100"
            src={landing}
            alt="First slide"
            width={'700px'}
            height={'400px'}
            active
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={home}
            alt="Second slide"
            width={'700px'}
            height={'400px'}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home1}
            alt="Third slide"
            width={'700px'}
            height={'400px'}
          />
        </Carousel.Item>
      </Carousel>
    </div>
    
  );
}

export default Carrousel;