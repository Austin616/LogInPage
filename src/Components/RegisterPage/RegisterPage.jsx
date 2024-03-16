import React from "react";
import "./RegisterPage.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />{" "}
          {/* Use type="email" for email input */}
          <FaUser className="icon" /> {/* You can change the icon if desired */}
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required />
          <FaLock className="icon" />
        </div>

        {/* Additional fields can be added based on your registration form requirements */}

        <button type="submit">Register</button>

        <div className="login-link">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
