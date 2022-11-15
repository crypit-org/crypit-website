import "./App.css";
import { Route, Routes, useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetInTouch from "./components/GetinTouch/GetInTouch";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="contact-us" element={<ContactUs/>} />
        <Route path="about-us" element={<AboutUs/>} />
      </Routes>
    </div>
  );
}

export default App;
