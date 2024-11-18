import React, { useState, useRef } from 'react';
import './Jduplaod.css'; // Specific CSS for JD Upload
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

function JDUpload() {
  const [clientName, setClientName] = useState('');
  const [newClientName, setNewClientName] = useState('');
  const [jdFileName, setJdFileName] = useState(null);
  const jdInputRef = useRef(null);

  const handleClientChange = (e) => setClientName(e.target.value);
  const handleNewClientChange = (e) => setNewClientName(e.target.value);

  const handleJDFileChange = (e) => {
    const file = e.target.files[0];
    setJdFileName(file ? file.name : null);
  };

  const handleJDIconClick = () => {
    if (jdInputRef.current) {
      jdInputRef.current.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ clientName, newClientName, jdFileName });
  };

  return (
    <div className="jd-upload-container">
     
      <form className="jd-upload-form" onSubmit={handleSubmit}>
      <h2 className="jd-upload-title"><center>JD Upload</center></h2>
        <div className="input-group">
            
          <input
            type="text"
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
            <option value="Client1">Google</option>
            <option value="Client2">Amazon</option>
          </select>
        </div>

        <input
          type="file"
          ref={jdInputRef}
          style={{ display: 'none' }}
          onChange={handleJDFileChange}
        />

        <div className="upload-box" onClick={handleJDIconClick}>
          <FontAwesomeIcon icon={faCloudUploadAlt} className="cloud-upload-icon" />
          <p>{jdFileName || "Drag and drop the JD file here"}</p>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default JDUpload;
