import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import FG from "./Components/ForgotPassword/FG";
import Home from "./Components/Home/Home";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<FG/>} />
      </Routes>
    </Router>
  );
};

export default Routing;
