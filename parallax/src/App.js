
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar/>
      </div>
    <section>
      <img src={require('./images/stars.png')} id="stars" alt='stars' />
      <img src={require('./images/moon.png')} id="moon" alt='moon' />
      <img src={require('./images/mountains_behind.png')} id="mountains_behind" alt='mountains_behind' />
      <h2 id='text'> Moon Light </h2>
      <img src={require('./images/mountains_front.png')} id="mountains_front" alt='mountains_front' />
    </section>
    </div>

  );
}

export default App;
