import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Screener.css'; // Assuming you save the CSS in this file

const Screener = () => {
  // State for dropdowns (client name, position name, and top resume selection)
  const [clientName, setClientName] = useState('');
  const [positionName, setPositionName] = useState('');
  const [topResume] = useState(5);
  const [activeTab] = useState('Questions'); // State for active tab

  // Handler for form submission
  const Search = () => {
    console.log(`Client Name: ${clientName}, Position Name: ${positionName}, Top Resume: ${topResume}`);
  };

  return (
    <div className='screener-container'>
    <div className='search-bar-container'>
      <div className='dropdown'>
        <select
          id="clientName"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        >
          <option value="" disabled>Client name</option>
          <option value="client1">Client 1</option>
          <option value="client2">Client 2</option>
        </select>
      </div>

      <div className='dropdown'>
        <select
          id="positionName"
          value={positionName}
          onChange={(e) => setPositionName(e.target.value)}
        >
          <option value="" disabled>Position Name</option>
          <option value="springDeveloper">Spring Developer</option>
          <option value="frontendDeveloper">Frontend Developer</option>
        </select>
      </div>
      </div>

      <br />

      {/* Questions Tab */}
      {activeTab === 'Questions' && (
        <div className='tabcontent active'>
          <h1>Job Interview Questions</h1>
          <p className='description'>Answer the following questions or generate new ones to prepare for your job interview.</p>

          {/* Client Name and Position Name Inputs */}
          <div className='input-section'>
            <input type='text' placeholder='Enter question here...' />
            <button>Generate</button>
          </div>

          <h2>Generated Questions</h2>
          <div className='questions'>
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
      <div className='buttons-section'>
        <Link to='/'>
          <button className='back-btn'>Back</button>
        </Link>
        <Link to='/tracker'>
          <button className='select-btn'>Export</button>
        </Link>
      </div>
    </div>
  );
};

export default Screener;
