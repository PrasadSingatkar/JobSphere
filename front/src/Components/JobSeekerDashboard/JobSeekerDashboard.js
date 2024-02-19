// JobSeekerDashboard.js
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import JobList from "../JobList/JobList";
import UserProfile from "./UserProfile";
import "./JobSeekerDashboard.css";

function JobSeekerDashboard() {
  const [setSelectedOption] = useState("jobs");

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/dashboard/jobs" onClick={() => setSelectedOption("jobs")}>
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" onClick={() => setSelectedOption("profile")}>
              My Profile
            </Link>
          </li>
        </ul>
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
