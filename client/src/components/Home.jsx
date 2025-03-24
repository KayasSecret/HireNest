import React from "react";
import logo from "../assets/Web-Logo.png";

const home = () => {
  return (
    <div className="content">
      <h1 class="text-3xl font-bold underline">Home</h1>
      <div>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default home;
