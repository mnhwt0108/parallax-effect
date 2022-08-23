
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      
    <section>
      <img src={require('./images/stars.png')} id="stars" />
      <img src={require('./images/moon.png')} id="moon" />
      <img src={require('./images/mountains_behind.png')} id="mountains_behind" />
      <img src={require('./images/mountains_front.png')} id="mountains_front" />
    </section>
    </div>

  );
}

export default App;
