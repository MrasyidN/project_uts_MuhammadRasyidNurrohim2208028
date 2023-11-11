
import './App.css';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './css/landingPage.css'



function App() {
  return (
    <div>
  
      <div className='myBG'>
      <Navigationbar/>
      <Home/>
      </div>
    

      <div className='About'>
        <About/>
      </div>

      <div className='Contact'>
        <Contact/>
      </div>

      <div className='Footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
