
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vipestudio from './components/Vipestudio';
import Teamfull from './components/Teamfull';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Succes from './components/Succes';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({once: true});
  }, [])
  return (
    <div className="App">
      <Vipestudio/>
      <Teamfull/>
      <Succes/>
      <Footer/>
    </div>
  );
}

export default App;
