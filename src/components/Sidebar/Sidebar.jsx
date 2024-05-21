import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemText, styled } from "@mui/material";
import './sidebar.css'
export default function Sidebar(props) {

  // Styles
  const SideDrawer = styled(Drawer)(({ theme }) => ({
    display: "none",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  }));


  const DrawerList = (
    <Box className="sidebar--container" sx={{ width: "85vw" }} role="presentation" onClick={props.toggleDrawer(false)}>

      <List>
        {["Home", "Book", "Check In", "My Trips"].map((text, index) => (
          <ListItem sx={{height: "150px"}} key={text} >
            <ListItemButton>
              <ListItemText className="sidebar--text" primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <SideDrawer  open={props.open} onClose={props.toggleDrawer(false)}>
        {DrawerList}
      </SideDrawer>
    </div>
  );
}
