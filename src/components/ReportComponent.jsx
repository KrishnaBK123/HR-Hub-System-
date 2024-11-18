import React, { useState } from "react";
import './ReportComponent.css'; // Assuming the styles will be in a separate CSS file

const ReportComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  return (
        <div className="containerA">
        <div className="client-search-container">
          <input
            type="text"
            className="client-search-input"
            placeholder="Search clients..."
          />
          <button className="client-search-button">Search</button>
        </div>


      <div className="table-container">
        <center>
          <table>
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Client Name</th>
                <th>Number of Position</th>
                <th>Pending Positions</th>
                <th>Closed position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Client A</td>
                <td>10</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Client B</td>
                <td>8</td>
                <td>3</td>
                <td>5</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Client C</td>
                <td>12</td>
                <td>7</td>
                <td>5</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Client D</td>
                <td>15</td>
                <td>9</td>
                <td>6</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Client D</td>
                <td>15</td>
                <td>9</td>
                <td>6</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Client D</td>
                <td>15</td>
                <td>9</td>
                <td>6</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Client D</td>
                <td>15</td>
                <td>9</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
      <div className="action-row">
  <button className="back-button">Back</button>

  <div className="right-actions">
    <div className="checkbox-tag">
      <label htmlFor="pdf">pdf</label>
      <input
        type="checkbox"
        id="pdf"
        name="pdf"
        checked={selectedOption === "pdf"}
        onChange={() => handleCheckboxChange("pdf")}
      />

      <label htmlFor="csv">csv</label>
      <input
        type="checkbox"
        id="csv"
        name="csv"
        checked={selectedOption === "csv"}
        onChange={() => handleCheckboxChange("csv")}
      />
    </div>

    <button className="export-button">Export</button>
  </div>
</div>

  </div>
  );
};

export default ReportComponent;