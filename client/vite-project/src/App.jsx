import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import VisionVortex from "./components/VisionVortex.jsx"; // VisionVortex component ko import kar rahe hain
import JobDesk from "./components/JobDesk.jsx"; // JobDesk component ko import kar rahe hain
import CodeClinic from "./components/CodeClinic.jsx"; // CodeClinic component ko import kar rahe hain
import "./index.css"; // CSS file import kar rahe hain

// 🏠 Home component - Yahan se user different pages par navigate kar sakta hai
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

// 🌍 App component - Routes define kar raha hai
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home page route */}
      <Route path="/vision-vortex" element={<VisionVortex />} /> {/* Vision Vortex page route */}
      <Route path="/job-desk" element={<JobDesk />} /> {/* Job Desk page route */}
      <Route path="/code-clinic" element={<CodeClinic />} /> {/* Code Clinic page route */}
    </Routes>
  );
}

export default App; // App component export kar rahe hain
