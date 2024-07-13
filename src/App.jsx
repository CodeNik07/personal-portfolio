import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner'
import NavBar from './Components/NavBar'
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import { Contact } from './Components/Contact';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
     
    </div>
  )
}

export default App
