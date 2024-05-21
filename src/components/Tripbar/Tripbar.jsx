import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import DatePicker from "../Navbar/DatePicker/DatePicker";
import "./tripbar.css";
const Tripbar = () => {
  const LargeTripBar = styled(Box)(({ theme }) => ({
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "20px",
    maxWidth: "100vw",
    marginLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  // JS CODE
  const [tripType, setTripType] = React.useState("");

  // ----- handle selected trip option eg. round trip, one--way trip
  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  return (
    <div>
      {/* ****** DESTINATIONS ****** */}
      <LargeTripBar className="trip--container">
        {/* **** START TRIPBAR **** */}
        <section className="trip--destination--container">
          <article className="trip--destination">
            <Typography variant="h4">KUM</Typography>
            <Typography variant="h6">Kumasi,AS</Typography>
          </article>
          <article className="tripbar--two--sided--arrow">↔</article>
          <article className="trip--destination">
            <Typography variant="h4">ACC</Typography>
            <Typography variant="h6">Accra,GA</Typography>
          </article>
        </section>

        {/* ***** MID TRIPBAR ***** */}
        <div className="mid--to--end">
          <section className="tripbar--input--container">
            <FormControl className="tripbar--input">
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

          <section className="date--container">
            {tripType === "roundTrip" ? (
              <FormControl>
                <article className="trip--roundTrip--select">
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
          <section className="search--btn--tripbar">
            <h3>SEARCH</h3>
          </section>
        </div>
      </LargeTripBar>
    </div>
  );
};

export default Tripbar;
