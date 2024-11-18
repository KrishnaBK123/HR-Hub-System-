import React from 'react';
import './Header.css'; // Assuming your CSS file is already set up
import { FaUserCircle } from 'react-icons/fa';
import logo from '../components/images/home-page.jpg';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" /> {/* Use the imported image */}
        <h1 className="company-name">HR Hub</h1>
      </div>
      <div className="profile-container">
        <FaUserCircle size={40} className="profile-icon" />
      </div>
    </header>
  );
}

export default Header;
