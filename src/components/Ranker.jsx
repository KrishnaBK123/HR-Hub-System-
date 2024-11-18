import React from 'react';
import { Link } from 'react-router-dom';
import './Ranker.css'; // Import specific styles for Ranker


const Ranker = () => {
  return (
    <div className="resume-ranker-container">
      <h1>Resume Ranker</h1>
      <p>Choose and rank Resumes from Repos. Generate a ranked list of matching resumes</p>

            <div className="search-bar">
        <div className="dropdown">
          <select id="clientName">
            <option value="" disabled selected>Client name</option>
            <option value="client1">Client 1</option>
            <option value="client2">Client 2</option>
          </select>
        </div>

        <div className="dropdown">
          <select id="positionName">
            <option value="" disabled selected>Position Name</option>
            <option value="springDeveloper">Spring Developer</option>
            <option value="frontendDeveloper">Frontend Developer</option>
          </select>
        </div>

        <div className="top-resume">
          <label htmlFor="topResume">Top resume:</label>
          <input type="number" id="topResume" defaultValue="5" min="1" max="10" />
        </div>

        {/* Global Resume Checkbox */}
        <div className="global-resume">
          <label>
            <input type="checkbox" id="globalResume" />
            Global Resume
          </label>
        </div>
        <button className="search-button">Rank</button>
      </div>
      <h2>Matching results</h2>

      <div className="results">
      <Link to="/tabs">
        <div className="result-card">
          <h3>Rajesh</h3>
          <p>.Net Developer</p>
          <p className="experience">4.5 years</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '98%' }}></div>
          </div>
        </div>
      </Link>
      <Link to="/tabs">
        <div className="result-card">
          <h3>Karthik A</h3>
          <p>Software Developer</p>
          <p className="experience">4.5 years</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
      </Link>
      <Link to="/tabs">
        <div className="result-card">
          <h3>Karthik B</h3>
          <p>Software Developer</p>
          <p className="experience">4.5 years</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
      </Link>
      <Link to="/tabs">
        <div className="result-card">
          <h3>Krishna B </h3>
          <p>Software Developer</p>
          <p className="experience">4.5 years</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
      </Link>

      <Link to="/tabs">
        <div className="result-card">
          <h3>Sandeep</h3>
          <p>Software Developer</p>
          <p className="experience">4.5 years</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
      </Link>
      
      <Link to="/tabs">
        <div className="result-card">
          <h3>Sandeep K </h3>
          <p>Spring Developer</p>
          <p className="experience">4.5 years</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '89%' }}></div>
          </div>
        </div>
      </Link>
      

      <Link to="/tabs">
        <div className="result-card">
          <h3>Krishna B K </h3>
          <p>Software Developer</p>
          <p className="experience">4.5 years</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
        </div>
      </Link>
      

      <Link to="/tabs">
        <div className="result-card">
          <h3>Manjunath</h3>
          <p>Spring Developer</p>
          <p className="experience">4.5 years</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
      </Link>
      
      
      </div>
    </div>
  );
};

export default Ranker;
