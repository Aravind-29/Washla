import './App.css';
import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import Ourself from './components/Ourself';
import Service from './components/Service';
import Team from './components/Team';
import Footer from './components/Footer';
import News from './components/News';
function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Features/>
      <Ourself/>
      <Service/>
      <Team/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
