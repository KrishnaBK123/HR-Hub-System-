import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import processCircle from '../components/images/process circle.png';
import './TabsComponent.css'; // Assuming you move the CSS to this file

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('Summary');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* Tabs Container */}
      <div className="tab-container">
        <div className="tab">
          <button
            className={`tablinks ${activeTab === 'Summary' ? 'active' : ''}`}
            onClick={() => openTab('Summary')}
          >
            Summary
          </button>
          <button
            className={`tablinks ${activeTab === 'Resume' ? 'active' : ''}`}
            onClick={() => openTab('Resume')}
          >
            Resume
          </button>
          <button
            className={`tablinks ${activeTab === 'Questions' ? 'active' : ''}`}
            onClick={() => openTab('Questions')}
          >
            Questions
          </button>
        </div>
      </div>

      {/* Tab Content */}

      {/* Summary Tab */}
      {activeTab === 'Summary' && (
        <div className="tabcontent active">
          <h2><center>Summary</center></h2>

          {/* Summary Container */}
          <div className="summary-container">
            {/* Primary Details Section */}
            <div className="summary-row">
              {/* Progress Circle on the Left */}
              <div className="progress-circle-container">
                <img src={processCircle} alt="Process Circle" className="process-image" />
              </div>

              {/* Primary Details on the Right */}
              <div className="primary-details">
                <p><strong>Name:</strong> Krishna B Kuntabhimagol</p>
                <p><strong>Contact:</strong> +91 7293476445</p>
                <p><strong>Email:</strong> krishnae@example.com</p>
              </div>
            </div>

            {/* Summary Description */}
            <div className="summary">
              <p>
                Krishna B Kuntabhimagol is a highly skilled software developer with over 5 years of experience in building scalable web applications. Adept in multiple programming languages including JavaScript, Python, and Java, Krishna excels in both frontend and backend development.
              </p>
              <p>
                Krishna has a proven track record of delivering high-quality software solutions on time and within budget. He is passionate about leveraging technology to solve real-world problems and is always eager to take on new challenges.
              </p>
            </div>
          </div>

          {/* Keywords Section */}
          <div className="keywords-section">
            <div className="keywords-buttons">
              <button className="keywords-btn">✔ Found Keywords</button>
              <button className="keywords-btn">✔ Missing Keywords</button>
            </div>

            <div className="keywords-summary">
              <table className="no-border">
                <thead>
                  <tr>
                    <th>Keywords</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Skills</td>
                    <td>
                      <div className="rating-icons">
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Resume Tab */}
      {activeTab === 'Resume' && (
        <div className="tabcontent active">
          <h2 className="resume-header"><center>Resume</center></h2>

          {/* Resume Container */}
          <div className="resume-tab-container" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            {/* Header Section */}
            <div className="resume-header-section">
              <h3>Krishna B K</h3>
              <p>Email: krishna@example.com | Phone: (123) 456-7890</p>
              <p>
                LinkedIn: <a href="https://linkedin.com/in/krishna" target="_blank" rel="noopener noreferrer">linkedin.com/in/krishna</a> | 
                GitHub: <a href="https://github.com/krishna" target="_blank" rel="noopener noreferrer">github.com/krishna</a>
              </p>
            </div>

            {/* Professional Summary Section */}
            <div className="resume-professional-summary">
              <h3>Professional Summary</h3>
              <p>Experienced software developer with a strong background in developing scalable web applications and working across the full stack. Proficient in JavaScript, Python, and Java.</p>
            </div>

            {/* Skills Section */}
            <div className="resume-skills">
              <h3>Skills</h3>
              <ul>
                <li>JavaScript, HTML, CSS</li>
                <li>React, Node.js, Express</li>
                <li>Python, Django, Flask</li>
                <li>Database Management: MySQL, MongoDB</li>
                <li>Version Control: Git, GitHub</li>
              </ul>
            </div>

            {/* Experience Section */}
            <div className="resume-experience">
              <h3>Experience</h3>
              <h4>Senior Developer at TechCorp</h4>
              <p>June 2018 - Present</p>
              <ul>
                <li>Led a team of 5 developers in building a scalable e-commerce platform.</li>
                <li>Implemented RESTful APIs using Node.js and Express.</li>
                <li>Optimized application performance, reducing load times by 30%.</li>
              </ul>
            </div>

            {/* Education Section */}
            <div className="resume-education">
              <h3>Education</h3>
              <h4>Bachelor of Science in Computer Science</h4>
              <p>University of Technology, 2014 - 2018</p>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="download-resume-container" style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link to="/download-resume">
              <button className="download-btn">Download Resume</button>
            </Link>
          </div>
        </div>
      )}

      {/* Questions Tab */}
      {activeTab === 'Questions' && (
        <div className="tabcontent active">
          <h1>Job Interview Questions</h1>
          <p className="description">Answer the following questions or generate new ones to prepare for your job interview.</p>

          <div className="input-section">
            <input type="text" placeholder="Enter question here..." />
            <button>Generate</button>
          </div>

          <h2>Generated Questions</h2>
          <div className="questions">
            <ul>
              <li>
                <strong>1. What inspired you to pursue a career in software development?</strong>
                <p>My passion for problem-solving and creativity inspired me to pursue software development.</p>
              </li>
              <li>
                <strong>2. Can you describe a challenging project you worked on and how you overcame the obstacles?</strong>
                <p>I overcame a complex project by implementing lazy loading and caching techniques.</p>
              </li>
              <li>
                <strong>3. How do you stay updated with the latest technologies and industry trends?</strong>
                <p>I regularly attend webinars, read tech blogs, and contribute to open-source projects.</p>
              </li>
              <li>
                <strong>4. What are your strengths and how do they contribute to your work?</strong>
                <p>My strengths include attention to detail, problem-solving, and quick learning abilities.</p>
              </li>
              <li>
                <strong>5. Where do you see yourself in the next five years?</strong>
                <p>I see myself leading a development team, working on cutting-edge technologies.</p>
              </li>
            </ul>
          </div>
        </div>
      )}

      <br />

      {/* Buttons Section */}
      <div className="buttons-section">
        <Link to="/Ranker">
          <button className="back-btn">Back</button>
        </Link>
        <Link to="/tracker">
          <button className="select-btn">Selected for Interview</button>
        </Link>
      </div>
    </div>
  );
};

export default TabsComponent; 