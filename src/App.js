import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Vipestudio from "./components/Vipestudio";
import Teamfull from "./components/Teamfull";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Succes from "./components/Succes";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Featuredon from "./components/Featuredon";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Featuredon/>
      <Vipestudio />
      <Teamfull />
      <Succes />
      <Footer />
    </>
  );
}

export default App;
