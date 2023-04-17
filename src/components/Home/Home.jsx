import { AboutMe } from '../AboutMe/AboutMe.jsx';
import { NavBar } from '../NavBar/NavBar.jsx';
import { Banner } from '../Banner/Banner.jsx';
import Projects from '../Projects/Projects.jsx';
import { Skills } from '../Skills/Skills.jsx';

export function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  )

}