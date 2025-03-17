import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import VisionVortex from "./components/VisionVortex.jsx";
import JobDesk from "./components/JobDesk.jsx";
import CodeClinic from "./components/CodeClinic.jsx";
import "./index.css";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <div className="cards-container">
        <Link to="/vision-vortex" className="card">Vision Vortex</Link>
        <Link to="/job-desk" className="card">Job Desk</Link>
        <Link to="/code-clinic" className="card">Code Clinic</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vision-vortex" element={<VisionVortex />} />
      <Route path="/job-desk" element={<JobDesk />} />
      <Route path="/code-clinic" element={<CodeClinic />} />
    </Routes>
  );
}

export default App
