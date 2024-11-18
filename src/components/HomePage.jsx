import React from 'react';
import { Link } from 'react-router-dom';
import uploadImage from '../components/images/upload.png'; // Adjust the import path as necessary
import dashboardImage from '../components/images/dashboard.png'; // Adjust the import path as necessary
import './HomePage.css'; // Import specific styles for HomePage

const HomePage = () => {
  return (
    <main className="home-page">
      <div className="welcome-section">
        <h1>👋 Welcome, HR Name!</h1>
        <p>HR-Hub is optimizing hiring, ranking resumes, tracking candidates</p>
        <br />
        <br />
        <p className="prompt-text">What would you like to do first</p>
      </div>

      <div className="actions">
        <div className="action-card">
          <Link to="/upload">
            <img src={uploadImage} alt="Upload Icon" />
            <p>Upload JD/Resume</p>
          </Link>
        </div>

        <div className="action-card">
          <Link to="/Dashboard">
            <img src={dashboardImage} alt="Dashboard Icon" />
            <p>View Dashboard</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
