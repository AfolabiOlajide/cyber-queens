import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Mint from './components/mint/Mint';

import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Mint />
    </div>
  );
}

export default App;
