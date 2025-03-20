import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/services";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import CodeClinic from "./components/CodeClinic";
import HireDesk from "./components/HireDesk";
import VisionVertex from "./components/VisionVertex";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/codeClinic" element={<CodeClinic />} />
        <Route path="/hireDesk" element={<HireDesk />} />
        <Route path="/visionVertex" element={<VisionVertex />} />
      </Routes>

     
    </>
  );
}

export default App;
