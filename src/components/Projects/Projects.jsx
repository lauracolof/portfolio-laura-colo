import './projects.css'
import rickmort from '../../assets/img/rickmort.png'
import home from '../../assets/img/homeong.png'
import pi from '../../assets/img/pi.png'


const project = [
  {
    name: 'Buddy ONG',
    image: home,
    tech: ['React', 'Redux', 'ChakraUI', 'TypeScript', 'Node.js', 'Express', 'TypeORM', 'PostgreSQL'],
    link: 'https://buddyong.vercel.app',
    description: 'Team project of Henry bootcamp. Web App that allow users to view information about dogs and cats lost, found or for adoption.'
  },
  {
    name: 'Rick & Morty clon',
    image: rickmort,
    tech: ['React', 'Bootstrap'],
    link: 'https://rickandmorty-puce.vercel.app/',
    description: 'Rick and Morty web app clone to practice React and Boostrap'
  },
  {
    name: 'Dogs App',
    image: pi,
    tech: ['JavaScript', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'React', 'Redux'],
    link: 'https://pi-dogs-ovvb.onrender.com/',
    description: 'Bootcamp project, where all dog breeds are shown, with filtering, alphabetical order, temperament, among others.'
  }
];

function Projects() {
  return (
    <div className='gral-container' id='projects' >
      <h2 className='projects'>Projects</h2>
      <div className='card-project'>
        {
          project.map((x) => {
            return (
              <div key={x.name} className='each-proj'>

                <div className='div-texts'>
                  <a href={x.link} target='_blank' rel='noreferrer'>
                    <h5 className='name-proj'>{x.name}</h5>
                  </a>
                  <a href={x.link} target='_blank' rel='noreferrer' className='img-proj'>
                  <img className='img-cont' src={x.image} alt={x.name} width={'320px'} height={'200px'} />
                </a>
                  <p className='descrip-proj'>{x.description}</p>
                  <div className='tech-div'>
                    {
                      x.tech.map((t) => 
                        <button key={t} className='btn-tech'>{t}</button>
                      )
                    }
                  </div>
                  <button type="button" className='btn-viewmore'>
                    <a href={x.link} target='_blank' rel='noreferrer' className='a-viewmore'>
                    View more
                    </a>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )

//   return (
//     <div className='general' id='projects'>
//       <div className='text'>
//         <h2>Projects</h2>
//         <h5 className='buddy'>
//           Buddy ONG 
//         </h5>
//         <h6>Design and development</h6>
//         <p className='description'>
//         This is the  <br /> The Front End is built with React, JavaScript, Redux, ChakraUI and connects to Back End developed with Node.js, TypeScript, TypeORM and PostgreSQL.
//         </p>
//       </div> 

//       <Carousel>
//         <Carousel.Item className='carousel-item' interval={1000}>
//           <img
//             className="d-block w-100"
//             src={landing}
//             alt="First slide"
//             width={'700px'}
//             height={'400px'}
//             active
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={500}>
//           <img
//             className="d-block w-100"
//             src={home}
//             alt="Second slide"
//             width={'700px'}
//             height={'400px'}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={home1}
//             alt="Third slide"
//             width={'700px'}
//             height={'400px'}
//           />
//         </Carousel.Item>
//       </Carousel>
//     </div>
    
//   );
}

export default Projects;