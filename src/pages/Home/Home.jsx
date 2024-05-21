import React from "react";
import Nav from "../../components/Navbar/Nav";
import "./home.css";
import Tripbar from "../../components/Tripbar/Tripbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeImg1 from "../../assets/packupHomeImg.jpg"
import { Box, Typography } from "@mui/material";
const Home = () => {
  const [open, setOpen] = React.useState(false);

  //   Open and Close Sidebar
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="main--container">
      <Nav toggleDrawer={toggleDrawer} />
      <Tripbar />
      {/* ****** HOME IMAGE ****** */}
      <Box className="img--container" sx={{height:{xs:"auto",sm:"65vh"}}}>
        <img  className= "home--img1" src={HomeImg1} alt="home image" />
        <Box className="img1--text" >
          <Typography variant="h4" sx={{fontWeight: 800,fontSize:{xs:"20px",sm:"50px"}}}>
            EASTER AT KWAHU
          </Typography>

          <Typography variant="h6">
            Book your easter trip tickets for Kwahu Abetifi ahead of time !
          </Typography>

          <article className="buy--tickets--btn">
            BUY TICKETS
          </article>
        </Box>
      </Box>

      <Sidebar toggleDrawer={toggleDrawer} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
