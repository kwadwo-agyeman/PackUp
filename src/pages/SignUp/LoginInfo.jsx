import { TextField } from "@mui/material";
import React from "react";

const LoginInfo = () => {
  return (
    <div>
      <section className="tab">
        <h2>Login Info</h2>
        <article>
          <article>
            <TextField
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
              required
            />
          </article>
          <br />
          <article>
            <TextField
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              required
            />
          </article>
          <br />
          <article>
            <TextField
              fullWidth
              id="confirm--password"
              label="Confirm Password"
              variant="outlined"
              type="password"
              required
            />
          </article>
          <br />
          <article className="next--btn">
            <h4>SUBMIT</h4>
          </article>
        </article>
      </section>
    </div>
  );
};

export default LoginInfo;
