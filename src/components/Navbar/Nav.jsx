import React from "react";
import "./nav.css";
import { Box, styled } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import SmallNav from "./SmallNav";
import { Link } from "react-router-dom";
const Nav = (props) => {
  // styled blocks
  const LargeNavBar = styled(Box)(({ theme }) => ({
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  return (
    <div>
      <div className="navbar">
        {/* Navbar for Large screens */}
        <LargeNavBar>
          <Box className="lg--navbar--top--left">
            <div className="logo">
              <h3>PACK.UP</h3>
            </div>
            <h4>BOOK</h4>
            <h4>CHECK IN</h4>
            <h4>MY TRIPS</h4>
          </Box>
          <Box className="lg--navbar--top--right">
            <div className="login--container">
              <h4>LOG IN</h4>
            </div>
            <Link to="/signup" style={{textDecoration: "none",color:"white",cursor:"pointer"}}>
              <h4>SIGN UP</h4>
            </Link>
            <div className="icons">
              <article className="icons--notification">
                <NotificationsIcon sx={{}} />
              </article>
              <article className="icons--search">
                <SearchIcon />
              </article>
            </div>
          </Box>
        </LargeNavBar>
        {/* Navbar for smaller screens */}
        <SmallNav toggleDrawer={props.toggleDrawer} />
      </div>
    </div>
  );
};

export default Nav;
