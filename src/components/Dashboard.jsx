import React from 'react';
import './Dashboard.css'; // Import the CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      
        <div className="welcome-section">
          <h1>👋 Welcome, HR Name!</h1>
          <p>HR-Hub is optimizing hiring, ranking resumes, tracking candidates</p>
        </div>
 

      {/* Stats Cards Section */}
      <section className="stats-cards">
        <div className="cardA">
          <h2>Clients</h2>
          <p>102</p>
        </div>
        <div className="cardA">
          <h2>Total Resumes</h2>
          <p>200</p>
        </div>
        <div className="cardA">
          <h2>Total JDs</h2>
          <p>70</p>
        </div>
      </section>

      {/* Recent JDs Section */}
      <section className="recent-jds">
        <h2>Recent JDs</h2>
        <table className="jd-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Description</th>
              <th>Time</th>
              <th>JD Attached</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XYZ</td>
              <td>Software Engineer</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
              <td>10min Ago</td>
              <td><button className="download-btn">Download JD</button></td>
            </tr>
            <tr>
              <td>XYZ</td>
              <td>Software Engineer</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
              <td>10min Ago</td>
              <td><button className="download-btn">Download JD</button></td>
            </tr>
            <tr>
              <td>XYZ</td>
              <td>Software Engineer</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
              <td>10min Ago</td>
              <td><button className="download-btn">Download JD</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
