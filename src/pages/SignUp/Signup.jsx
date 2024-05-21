import { Box, TextField } from "@mui/material";
import React from "react";
import Logo from "../../assets/titleIcon.png";
import "./signup.css";
import { Link } from "react-router-dom";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import LoginInfo from "./LoginInfo";
const Signup = () => {
  return (
    <div className="signup--container">
      {/* ***** Header ***** */}
      <header className="header">
        <Link to="/">
          <div className="logo--container">
            <img src={Logo} className="logo" alt="logo Image" />
          </div>
        </Link>
        <h2>PACK.UP</h2>
      </header>

      {/* ***** Form Container ****** */}
      <Box
        className="form--container"
        sx={{ width: { xs: "90vw", sm: "30vw" } }}
      >
        {/* **** Basic Info **** */}
        <BasicInfo />
        <br />
        <br />
        {/* **** Contact Info **** */}
        <ContactInfo />
        <br />
        <br />
        {/* ***** Login Info ***** */}
        <LoginInfo />
      </Box>
    </div>
  );
};

export default Signup;
