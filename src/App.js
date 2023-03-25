import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Rescatados } from './components/Rescatados';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Rescatados />
    </div>
  );
}

export default App;
