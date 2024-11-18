import React, { useState, useRef } from 'react';
import './Resumeuplaod.css'; // Specific CSS for Resume Upload
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

function ResumeUpload() {
  const [clientName, setClientName] = useState('');
  const [positionName, setPositionName] = useState('');
  const [resumeFileName, setResumeFileName] = useState(null);
  const resumeInputRef = useRef(null);

  const handleClientChange = (e) => setClientName(e.target.value);
  const handlePositionChange = (e) => setPositionName(e.target.value);

  const handleResumeFileChange = (e) => {
    const file = e.target.files[0];
    setResumeFileName(file ? file.name : null);
  };

  const handleResumeIconClick = () => {
    if (resumeInputRef.current) {
      resumeInputRef.current.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ clientName, positionName, resumeFileName });
  };

  return (
    <form className="resume-upload-form" onSubmit={handleSubmit}>
      <h2><center>Upload Resume</center></h2>

      <div className="select-wrapper">
        <select value={clientName} onChange={handleClientChange} className="form-select">
          <option value="">Client Name</option>
          <option value="Client1">Client 1</option>
          <option value="Client2">Client 2</option>
        </select>
      </div>

      <div className="select-wrapper">
        <select value={positionName} onChange={handlePositionChange} className="form-select">
          <option value="">Position</option>
          <option value="Position1">Front-end Developer</option>
          <option value="Position2">Java Developer</option>
        </select>
      </div>

      <input
        type="file"
        ref={resumeInputRef}
        style={{ display: 'none' }}
        onChange={handleResumeFileChange}
      />

      <div className="upload-box" onClick={handleResumeIconClick}>
        <FontAwesomeIcon icon={faCloudUploadAlt} className="cloud-upload-icon" />
        <p>{resumeFileName || "Drag and drop the Resume file here"}</p>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default ResumeUpload;
