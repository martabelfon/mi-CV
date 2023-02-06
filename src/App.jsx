import { CV } from './CV/CV';
import './App.scss';
import Navbar from './components/NavBar';

console.log(CV);

function App() {
  return (
    <div className="App">
        <h1>Mi CV</h1>
        <Navbar/>
        <div>Contenido..</div>
    </div>
  );
}

export default App;
