import React from "react";
import { FaUser } from "react-icons/fa";

const ForgotPasswordPage = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Forgot Password</h1>
        <div className="input-box">
          <input type="email" placeholder="Email" required />{" "}
          {/* Use type="email" for email input */}
          <FaUser className="icon" /> {/* You can change the icon if desired */}
        </div>
        {/* Additional fields can be added based on your forgot password form requirements */}

        <button type="submit">Reset Password</button>

        <div className="login-link">
          <p>
            Remembered your password? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
