import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "./Signup.css";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isSignUp ? "Sign-up successful!" : "Login successful!");
  };

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="auth-box"
      >
        <h2 className="title">{isSignUp ? "Sign Up" : "Login"}</h2>
        <p className="subtitle">Secure your communications</p>
        <form onSubmit={handleSubmit} className="form">
          {isSignUp && (
            <div className="input-box">
              <FaUser className="icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="input"
              />
            </div>
          )}
          <div className="input-box">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input"
            />
          </div>
          {isSignUp && (
            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input"
              />
            </div>
          )}
          <button type="submit" className="submit-btn">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>
        <div className="or-text">OR</div>
        <div className="social-buttons">
          <button className="social-btn google"><FcGoogle /> Google</button>
          <button className="social-btn facebook"><BsFacebook className="fb-icon" /> Facebook</button>
        </div>
        <p className="toggle-text">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span onClick={() => setIsSignUp(!isSignUp)} className="toggle-link">
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </motion.div>
    </div>
  );
}
