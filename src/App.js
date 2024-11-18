import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Adjust path as necessary
import Sidebar from './components/Sidebar'; // Adjust path as necessary
import Upload from './components/Upload'; // Adjust path as necessary
import Ranker from './components/Ranker'; // Adjust path as necessary
import './App.css'; // Adjust path as necessary
import TabsComponent from './components/TabsComponent';
import ReportComponent from './components/ReportComponent';
import Dashboard from './components/Dashboard';
import TrackerComponent from './components/TrackerComponent'; // Import TrackerComponent
import Screener from './components/Screener';
import Jduplaod from './components/Jdupload';
import ResumeUpload from './components/Resumeuplaod';



const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header and Sidebar will stay fixed */}
        <Header />
        <Sidebar />
        
        {/* Main content where all routes are rendered */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/ranker" element={<Ranker />} />
            <Route path="/screener" element={<Screener />} />
            <Route path="/tabs" element={<TabsComponent />} />
            <Route path="/report" element={<ReportComponent />} />
            <Route path="/tracker" element={<TrackerComponent />} />
            <Route path="/Jduplaod" element={<Jduplaod />} />
            <Route path="/Resumeuplaod" element={<ResumeUpload />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;