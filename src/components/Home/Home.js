import { AboutMe } from '../AboutMe/AboutMe.jsx';
import { NavBar } from '../NavBar/NavBar.jsx';
import { Banner } from '../Banner/Banner.jsx';
import Carrousel from '../Projects/Projects.jsx';

export function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutMe />
      <Carrousel />

    </div>
  )

}