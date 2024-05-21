import React from "react";
import "./smallNav.css";
import { Box, Typography, styled } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/NotificationsActive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Modal1 from "../ModifyTravelModal/Modal1";
import { Link } from "react-router-dom";
const SmallNav = (props) => {
  // styles
  const SmallNavBar = styled(Box)(({ theme }) => ({
    display: "none",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  }));

  const DropDownArrow = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  }));

  //JS code
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="sm--navbar--container">
      <SmallNavBar>
        {/* **** TOP ***** */}
        <div className="sm--navbar--top">
          <article className="navmenu">
            <MenuIcon onClick={props.toggleDrawer(true)} sx={{ fontSize: "2.5rem" }} />
          </article>
          <article className="login--signup--container">
            <div className="login--container">
              <h4>LOGIN</h4>
            </div>
            <Link to="/signup" style={{textDecoration: "none",color:"white",cursor:"pointer"}}>
              <h4>SIGN UP</h4>
            </Link>
          </article>
          <article className="notification">
            <NotificationsIcon sx={{ fontSize: "2.5rem" }} />
          </article>
        </div>

        {/* ****** MIDDLE ******* */}
        <div className="sm--navbar--mid">
          <article>
            <h4>BOOK</h4>
          </article>
          <article>
            <h4>CHECK IN</h4>
          </article>
          <article>
            <h4>MY TRIPS</h4>
          </article>
        </div>

        {/* ***** BOTTOM ***** */}
        <div className="sm--navbar--bottom">
          <section className="destination--arrow">
            <ArrowCircleLeftOutlinedIcon sx={{ fontSize: "2.5rem" }} />
            <article className="horizontal--line"></article>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: "2.5rem" }} />
          </section>
        </div>

        {/* ****** DESTINATIONS ****** */}
        <div className="destination--container">
          <article className="destination">
            <Typography variant="h3">KUM</Typography>
            <Typography variant="h5">Kumasi,AS</Typography>
          </article>

          <article className="destination">
            <Typography variant="h3">ACC</Typography>
            <Typography variant="h5">Accra,GA</Typography>
          </article>
        </div>
      </SmallNavBar>

      {/* **** DROPDOWN **** */}
      <DropDownArrow className="sm--navbar--dropdown">
        <article onClick={() => handleOpen()} className="dropdown--arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: "3.5rem" }} />
        </article>
      </DropDownArrow>

      {/* ***** MODAL ***** */}
      <Modal1 open={open} handleClose={handleClose} />
    </div>
  );
};

export default SmallNav;
