// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/Web-Logo.png'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <img src={logo} alt="Logo" />
      </div>
    </>
  )
}

export default App


