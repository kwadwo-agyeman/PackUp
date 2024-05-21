import { TextField } from "@mui/material";
import React from "react";

const ContactInfo = () => {
  return (
    <div>
      <section className="tab">
        <h2>Contact Info</h2>
        <article>
          <article>
            <TextField
              fullWidth
              id="phone--number"
              label="Phone Number"
              variant="outlined"
              required
            />
          </article>
          <br />
          <article>
            <TextField
              fullWidth
              id="email--address"
              label="Email Address"
              variant="outlined"
            />
          </article>
        </article>
      </section>
    </div>
  );
};

export default ContactInfo;
