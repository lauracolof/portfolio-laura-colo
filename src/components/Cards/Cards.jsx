import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './ProjectCards.css'
/*images*/
import rickmort from '../../assets/img/rickmort.png';
import home from '../../assets/img/homeong.png';
import pi from '../../assets/img/pi.png';

function ProjectCards() {
  return (
    <CardGroup className='card-Grp'>
      <Card xs={1} md={2} className="all-cards"> 
      <h3 className='title-projects'>Projects</h3>
        <Card.Body>
          <Card.Title>Buddy ONG</Card.Title>
        <Card.Img variant="top" src={home} width={'250px'} />
          <Card.Text>
          Team project of Henry bootcamp. Web App that allow users to view information about dogs and cats lost, found or for adoption.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button>Visit
          <a href='https://buddyong.vercel.app'> </a>
          </button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={pi} width={'250px'} />
        <Card.Body>
          <Card.Title>Dog's App</Card.Title>
          <Card.Text>
          Bootcamp project, where all dog breeds are shown, with filtering, alphabetical order, temperament, among others.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button>Visit 
          <a href='https://pi-dogs-ovvb.onrender.com/'> </a>
          </button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={rickmort} width={'250px'} />
        <Card.Body>
          <Card.Title>Morty project</Card.Title>
          <Card.Text>
          Rick and Morty web app clone to practice React and Boostrap
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button>Visit
          <a href='https://rickandmorty-puce.vercel.app/'> </a>
          </button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default ProjectCards;