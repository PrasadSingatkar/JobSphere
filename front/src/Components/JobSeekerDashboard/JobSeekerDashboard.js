// JobSeekerDashboard.js
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import JobList from "../JobList/JobList";
import UserProfile from "./UserProfile";
import "./JobSeekerDashboard.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function JobSeekerDashboard() {
  const [selectedOption, setSelectedOption] = useState("jobs");

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="card-container">
          <div className="card" style={{ maxWidth: "300px", marginRight: "20px" }}>
            <img src="/images/profileimage.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">A streamlined view for viewing your profile details in a user-friendly format</p>
              <Link to="/dashboard/profile" className="btn btn-primary" onClick={() => setSelectedOption("profile")}>
                My Profile
              </Link>
            </div>
          </div>
          <div className="card" style={{ maxWidth: "300px" }}>
            <img src="/images/profileimage.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Jobs</h5>
              <p className="card-text">Search your desired job</p>
              <Link to="/dashboard/profile" className="btn btn-primary" onClick={() => setSelectedOption("jobs")}>
                Jobs
              </Link>
            </div>
          </div>
        </div>
        
      </div>

      <div className="main-content">
        <Routes>
          <Route path="jobs" element={<JobList />} />
          <Route path="profile" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}


export default JobSeekerDashboard;
