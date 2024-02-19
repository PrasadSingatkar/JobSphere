// SignInPage.js
import React from "react";
import "./SignInPage.css";

function SignInPage() {
    return (
        <div className="signin-container">
            <div className="signin-box">
                <img
                    src="/images/6.png"
                    alt="logo"
                    style={{ width: "8cm", height: "8cm" }}
                />

                <h1>Sign In</h1>
                <form>
                    <label htmlFor="userType">Select User:</label>
                    <select id="userType" name="userType">
                        <option value="jobSeeker">Job Seeker</option>
                        <option value="jobProvider">Job Provider</option>
                        <option value="company">Company</option>
                    </select>

                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SignInPage;
