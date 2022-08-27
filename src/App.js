
import './App.css';
import ScrollToTop from './components/backToTop';
import {
	Route,
	Routes,  useRoutes 
} from "react-router-dom";
import Home from './pages/Home';
import Feature from './pages/Feature';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
     <Route path="*" element={<Home />} />
     <Route path="/feature" element={<Feature />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
