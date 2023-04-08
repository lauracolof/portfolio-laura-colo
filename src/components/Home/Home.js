import { AboutMe } from '../AboutMe/AboutMe';
import { NavBar } from '../NavBar/NavBar'
import { Banner } from '../Banner/Banner.js'

export function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutMe />
    </div>
  )

}