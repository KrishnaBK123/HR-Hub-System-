import React, { useState, useRef } from 'react';
import './Upload.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

function Upload() {
  const [clientName, setClientName] = useState('');
  const [positionName, setPositionName] = useState('');
  const [newClientName, setNewClientName] = useState('');
  const [jdFileName, setJdFileName] = useState(null); // State for JD file name
  const [resumeFileName, setResumeFileName] = useState(null); // State for Resume file name

  const jdInputRef = useRef(null); // For JD upload
  const resumeInputRef = useRef(null); // For resume upload

  const handleClientChange = (e) => setClientName(e.target.value);
  const handlePositionChange = (e) => setPositionName(e.target.value);
  const handleNewClientChange = (e) => setNewClientName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit
    console.log({
      clientName,
      positionName,
      newClientName,
      jdFileName,
      resumeFileName,
    });
  };

  // Function to programmatically trigger JD file input
  const handleJDIconClick = () => {
    if (jdInputRef.current) {
      jdInputRef.current.click();
    }
  };

  // Function to programmatically trigger Resume file input
  const handleResumeIconClick = () => {
    if (resumeInputRef.current) {
      resumeInputRef.current.click();
    }
  };

  const handleJDFileChange = (e) => {
    const file = e.target.files[0];
    setJdFileName(file ? file.name : null);
  };

  const handleResumeFileChange = (e) => {
    const file = e.target.files[0];
    setResumeFileName(file ? file.name : null);
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <div className="header-bar">
        <h2>Upload JD and Resume Files</h2>
      </div>

      <div className="form-container">
        {/* Left Column: Upload JD */}
        <div className="upload-cards">
          <center><h3>Upload JDs</h3></center>
          <div className="input-group">
            <input
              type="text"
              id="newClient"
              placeholder="Add New Client"
              value={newClientName}
              onChange={handleNewClientChange}
              className="form-input"
            />
            <button type="button" className="add-button">Add</button>
          </div>
          <div className="select-wrapper">
            <select value={clientName} onChange={handleClientChange} className="form-select">
              <option value="">Client Name</option>
              <option value="Client1">Client 1</option>
              <option value="Client2">Client 2</option>
            </select>
          </div>

          {/* Hidden JD File Input */}
          <input
            type="file"
            ref={jdInputRef}
            style={{ display: 'none' }}
            onChange={handleJDFileChange}
          />

          {/* Clickable Icon to Trigger JD File Input */}
          <div className="upload-box" onClick={handleJDIconClick}>
            <FontAwesomeIcon icon={faCloudUploadAlt} className="cloud-upload-icon" />
            <p>{jdFileName || "Drag and drop the JD file here"}</p>
          </div>
        </div>

        {/* Right Column: Upload Resume */}
        <div className="upload-cards">
          <center><h3>Upload Resumes</h3></center>
          <div className="select-wrapper">
            <select value={clientName} onChange={handleClientChange} className="form-select">
              <option value="">Client Name</option>
              <option value="Client1">Client 1</option>
              <option value="Client2">Client 2</option>
            </select>
          </div>
          <div className="select-wrapper">
            <select value={positionName} onChange={handlePositionChange} className="form-select">
              <option value="">Position Name</option>
              <option value="Position1">Position 1</option>
              <option value="Position2">Position 2</option>
            </select>
          </div>

          {/* Hidden Resume File Input */}
          <input
            type="file"
            ref={resumeInputRef}
            style={{ display: 'none' }}
            onChange={handleResumeFileChange}
          />

          {/* Clickable Icon to Trigger Resume File Input */}
          <div className="upload-box" onClick={handleResumeIconClick}>
            <FontAwesomeIcon icon={faCloudUploadAlt} className="cloud-upload-icon" />
            <p>{resumeFileName || "Drag and drop the Resume file here"}</p>
          </div>
        </div>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default Upload;
