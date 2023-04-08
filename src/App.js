import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { AboutMe } from './components/AboutMe/AboutMe';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
    </div>
  );
}

export default App;
