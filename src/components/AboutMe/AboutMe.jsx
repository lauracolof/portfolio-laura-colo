import './aboutme.css';
import { Container, Col, Row } from 'react-bootstrap';
import photo from '../../assets/img/photo.jpg'

export const AboutMe = () => {

  return (
    <div className='all'>

      <section className='about-me' id='about-me'>
        <Container>
          <Row>
            <Col>
              <div className='aboutme-bx'>
                <img className='profile' src={photo} alt="lauracolo" width='300rem' />
                <h2>
                  About me
                </h2>
                <br />
                <h5>Where do I come from?</h5>
                <p>I became interested in the world of programming a few years ago and I've been learning by my self. Once I was able to devote more time to my studies, my passion for technology increased. Now my goal is to be a professional developer and make a change of direction in my life. I hope someday to make my mark in the industry, there is still a lot to do.</p>
                <br />
                <h5>Studies</h5>
                <p>I am proud to say that I have completed my studies as a Full Stack Web Developer at Henry. During my time there, I gained a deep understanding of web development, including both the front-end and back-end aspects of it. <br />In addition to my studies at Henry, I also completed a course in Back End Development at the IBEC institute. This program provided me with valuable knowledge and skills. <br />Together, my education in Full Stack and Back End Development has equipped me with the tools and knowledge I need to create complex and sophisticated web applications. I have a deep appreciation for the importance of both front-end and back</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div >

  )
} 