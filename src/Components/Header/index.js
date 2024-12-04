import React from "react";
import Navbar from "../Navbar"; // Assuming Navbar component exists
import "./index.css";

const Header = () => (
  <header className="header">
    <div className="header-top">
      <p className="contact-info">Toll free: +91 72900 92216 | E-mail: customercare@dcbookshop.net</p>
    </div>
    <div className="header-main">
      <div className="logo">
        <img src="/assets/logo.png" alt="DC Books Logo" />
      </div>
      <Navbar />
    </div>
  </header>
);

export default Header;
