import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import "./modal.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import DatePicker from "../Navbar/DatePicker/DatePicker";
const Modal1 = (props) => {
  const [tripType, setTripType] = React.useState("");

  // ----- handle selected trip option eg. round trip, one--way trip
  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  return (
    <div>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box className="modal--container">
          {/* ***** MODAL TOP ***** */}
          <div className="modal--container--top">
            <article
              aria-labelledby="close--btn"
              id="close--btn"
              className="close--btn"
            >
              <CloseIcon
                onClick={props.handleClose}
                sx={{ fontSize: "40px", color: "white" }}
              />
            </article>

            <article className="book--checkin--container">
              <h4>BOOK</h4>
              <h4>CHECK IN</h4>
              <h4>MY TRIPS</h4>
            </article>
          </div>

          {/**  MODAL MIDDLE  ***/}
          <Box sx={{ mt: 2, color: "red" }}>
            {/* MID-TOP */}
            <section className="modal--middle--top">
              <article className="destination">
                <Typography variant="h3">KUM</Typography>
                <Typography variant="h5">Kumasi,AS</Typography>
              </article>
              <article className="two--sided--arrow">↔</article>
              <article className="destination">
                <Typography variant="h3">ACC</Typography>
                <Typography variant="h5">Accra,GA</Typography>
              </article>
            </section>
            {/* MID-MIDDLE */}
            <section className="trip--input--container">
              <FormControl className="trip--input">
                <Select
                  id="trip--type"
                  value={tripType}
                  aria-labelledby="trip--type"
                  onChange={handleTripTypeChange}
                >
                  <MenuItem value={"roundTrip"}>Round Trip</MenuItem>
                  <MenuItem value={"oneWay"}>One Way Trip</MenuItem>
                </Select>
              </FormControl>
            </section>

            {/* MID-BOTTOM */}
            <section className="trip--date--container">
              {tripType === "roundTrip" ? (
                <FormControl>
                  <article className="roundTrip--select">
                    <DatePicker />
                    <article
                      style={{ fontSize: "50px", color: "rgb(33, 31, 31)" }}
                    >
                      -
                    </article>
                    <DatePicker />
                  </article>
                </FormControl>
              ) : (
                <FormControl>
                  <DatePicker />
                </FormControl>
              )}
            </section>

            {/* **** SEARCH BUTTON **** */}
            <section className="search--btn">
              <h3>SEARCH</h3>
            </section>
          </Box>

          <Box className="modal--bottom--banner"></Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Modal1;
