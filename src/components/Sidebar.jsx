import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaCloudUploadAlt, FaChartLine, FaFileContract, FaUserFriends } from 'react-icons/fa'; // Change if needed
import { Link } from 'react-router-dom';

function Sidebar() {
  // State to manage the dropdown visibility
  const [isUploadDropdownVisible, setIsUploadDropdownVisible] = useState(false);

  const handleUploadMouseEnter = () => {
    setIsUploadDropdownVisible(true); // Show dropdown on hover
  };

  const handleUploadMouseLeave = () => {
    setIsUploadDropdownVisible(false); // Hide dropdown when not hovering
  };

  const handleDropdownItemClick = () => {
    setIsUploadDropdownVisible(false); // Collapse dropdown on item click
  };

  return (
    <div className="sidebar">
      <div className="menu-item">
        <Link to="/home">
          <FaHome size={20} />
          <span>Home</span>
        </Link>
      </div>

      {/* Upload Menu with Hover Dropdown */}
      <div 
        className="menu-item"
        onMouseEnter={handleUploadMouseEnter}
        onMouseLeave={handleUploadMouseLeave}
      >
        <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FaCloudUploadAlt size={20} />
          <span>Upload</span>
        </div>

        {/* Dropdown: Visible when hovered */}
        {isUploadDropdownVisible && (
          <div className="dropdown">
            <Link to="/Resumeuplaod" onClick={handleDropdownItemClick}>Resume Upload</Link>
            <Link to="/Jduplaod" onClick={handleDropdownItemClick}>JD Upload</Link>
          </div>
        )}
      </div>    

      <div className="menu-item">
        <Link to="/ranker">
          <FaChartLine size={20} />
          <span>Ranker</span>
        </Link>
      </div>

      <div className="menu-item">
        <Link to="/screener">
          <FaUserFriends size={20} />
          <span>Screener</span>
        </Link>
      </div>

      <div className="menu-item">
        <Link to="/report">
          <FaFileContract size={20} />
          <span>Report</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
