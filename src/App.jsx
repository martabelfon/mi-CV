import { CV } from './CV/CV';
import './App.scss';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Hero from './components/Hero';

console.log(CV);

function App() {
  return (
    <div className="App">
        <h1>Mi CV</h1>
        <Navbar/>
        
      <div className='container'>
        <Routes>
          <Route active path="/" element={<Hero/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/languages" element={<Languages/>}/>
          <Route path="/skills" element={<Skills/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
