import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './TrackerComponent.css'; // Import the CSS file

const TrackerComponent = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const goBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="tracker-container">
            {/* Board section with columns */}
            <div className="tracker-board">
                {/* Shortlisted column with filter icon and card */}
                <div className="tracker-column">
                    <div className="tracker-column__header">
                        <span>Shortlisted</span>
                        <i className="fa fa-filter"></i>
                    </div>
                    <div className="tracker-card">
                        <p>Krishna B K</p>
                        <p>Company Name</p>
                        <p>Software Engineer</p>
                    </div>
                </div>

                {/* Empty columns as placeholders for Interviewing, Selection, and Offer Status */}
                <div className="tracker-column">
                    <div className="tracker-column__header">Interviewing</div>
                </div>

                <div className="tracker-column">
                    <div className="tracker-column__header">Selection</div>
                </div>

                <div className="tracker-column">
                    <div className="tracker-column__header">Offer Status</div>
                </div>
            </div>

          
        </div>
    );
};

export default TrackerComponent;
