import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Home from './container/home/Home';
import About from './container/about/About';
import Resume from './container/resume/Resume';
import Skills from './container/skills/Skills';
import Portfolio from './container/portfolio/Portfolio';
import Contact from './container/contact/Contact';
import NavBar from './components/NavBar/NavBar';
import ParticlesComponent from './utils/particles';


function App() {
  const location = useLocation();
  const renderParticlesJsInHomePage = location.pathname === '/';
  return (
    <>
    <div className='App'>
    {/* particels js */}
    {
      renderParticlesJsInHomePage && 
      <ParticlesComponent></ParticlesComponent>
    }
    

    {/* navbar */}
    <NavBar></NavBar>

    {/* Main Contains */}
    <div className='App__main-page-content'>
    <Routes>
      <Route index path='/'element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/resume' element={<Resume></Resume>}></Route>
      <Route path='/skills' element={<Skills></Skills>}></Route>
      <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
    </div>
      {/* <h1>Test By Md rocky islam</h1> */}
    
      </div>
    </>
  )
}

export default App
