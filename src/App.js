
import './App.css';
import About from './components/AboutSection/about';
import ScrollToTop from './components/backToTop';
import Feature from './components/FeaturedSection/feature';
import Footer from './components/Footer/footer';
import HeroSection from './components/HeroSection/hero';
import Navbar from './components/Navbar/navbar';
import Testimonial from './components/Testimonial/testimonial';
import Team from './components/OurTeam/Team';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Feature/>
      <Testimonial/>
      {/* <Team/> */}
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
