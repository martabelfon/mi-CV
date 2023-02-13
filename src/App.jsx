import { CV } from './CV/CV';
import './App.scss';
import { Route, Routes } from 'react-router';
import Hero from './components/Hero';
import { ReactCompareSlider } from 'react-compare-slider';

// import Navbar from './components/NavBar';
import Education from './components/Education';
import Experience from './components/Experience';
// import Languages from './components/Languages';
// import Skills from './components/Skills';


console.log(CV);

function App() {
  return (
      <div className="App">
   
        <div className='header'>
          <div className='box1'>  
            <h1>Hola, soy Marta!</h1>
          </div> 
            
          <div className='box2'>
          {/* <Navbar/> */}
            <Routes>
                <Route active path="/" element={<Hero/>}/>
                {/* <Route path="/experience" element={<Experience/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/languages" element={<Languages/>}/>
                <Route path="/skills" element={<Skills/>}/> */}
              </Routes>
          </div>
        </div>
        <div className='container'>
        <ReactCompareSlider
            itemOne={<Experience/>} 
            itemTwo={<Education/>}
        />
      </div>
    </div>
  );
}

export default App;

