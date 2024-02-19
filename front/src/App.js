import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import LandingPage from "./Components/LandingPage/LandingPage";
import SignInPage from "./Components/SignInPage/SignInPage";
import JobSeekerDashboard from "./Components/JobSeekerDashboard/JobSeekerDashboard";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/sdashboard" element={<JobSeekerDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
