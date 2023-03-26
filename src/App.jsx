import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Adopcion } from './components/Adopcion';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Adopcion />
    </div>
  );
}

export default App;
