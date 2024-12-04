import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => (
  <nav className="navbar">
    <p className = "welcome-text"> Welcome Guest </p>
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/categories" className="nav-link">Categories</Link>
    <Link to = "/blog" className = "nav-link"> Blog </Link>
    <Link to="/login" className="nav-link">Login</Link>
    <Link to="/signup" className="nav-link">SignUp</Link>
    <div className="cart">
      <span>Cart: 0</span>
    </div>
  </nav>
);

export default Navbar;
