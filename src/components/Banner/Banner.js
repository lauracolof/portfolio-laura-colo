import React, { useEffect, useState } from 'react';
import './banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['I`m a Full Stack Developer', 'I`m a Back End Developer'];
  const [text, setText] = useState('');
  const [alpha, setAlpha] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, alpha)

    return () => {
      clearInterval(ticker)
    };
  }, [text]);

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setAlpha(prevAlpha => prevAlpha / 2)
    };

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setAlpha(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setAlpha(500);
    }
  };

  return (
    <section className="banner" id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} sl={7}>
            <span className='tagline'>Welcome to my porfolio</span>
            <h1>{
              `Hi! My name is Laura and `
            }
              {<br />}
              <span className="wrap">{text}</span>
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