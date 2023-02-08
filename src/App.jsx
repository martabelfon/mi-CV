import { CV } from './CV/CV';
import './App.scss';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router';

console.log(CV);

function App() {
  return (
    <div className="App">
        <h1>Mi CV</h1>
        <Navbar/>
        
      <div className='container'>
        <Routes>
          <Route active path="/" element={<div>Inicio...</div>}/>
          <Route path="/experience" element={<div>Experiencia...</div>}/>
          <Route path="/education" element={<div>educacion...</div>}/>
          <Route path="/languages" element={<div>lenguajes...</div>}/>
          <Route path="/skills" element={<div>skills...</div>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
