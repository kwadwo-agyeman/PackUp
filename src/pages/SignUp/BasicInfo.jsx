import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import DatePicker from "../../components/Navbar/DatePicker/DatePicker";

const BasicInfo = () => {
  // JS CODE
  const [genderType, setGenderType] = React.useState("");

  // ----- handle selected trip option eg. round trip, one--way trip
  const handleGenderTypeChange = (e) => {
    setGenderType(e.target.value);
  };

  return (
    <div>
      <section className="tab">
        <h2>Basic Info</h2>
        <article className="tab--body active">
          <article>
            <TextField
              fullWidth
              id="first--name"
              label="First Name"
              variant="standard"
              required
            />
          </article>
          <br></br>
          <article>
            <TextField
              fullWidth
              id="last--name"
              label="Last Name"
              variant="standard"
              required
            />
          </article>
          <br></br>
          <article>
            <TextField
              fullWidth
              id="middle--name"
              label="Middle Name"
              variant="standard"
            />
          </article>
          <br />
          <article className="date--of--birth">
            <h3>Date Of Birth</h3>
            <DatePicker />
          </article>
          <br />
          <article>
            <h3>Gender</h3>

            <FormControl className="gender--input" fullWidth>
              <Select
                id="gender--type"
                value={genderType}
                aria-labelledby="gender--type"
                onChange={handleGenderTypeChange}
              >
                <MenuItem value={"Male"}> Male </MenuItem>
                <MenuItem value={"Female"}> Female </MenuItem>
              </Select>
            </FormControl>
          </article>
          <br />
          {/* <article className="next--btn">
            <h4>NEXT</h4>
          </article> */}
        </article>
      </section>
    </div>
  );
};

export default BasicInfo;
