import React from "react";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DP } from "@mui/x-date-pickers/DatePicker";

const DatePicker = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoItem>
          <DP />
        </DemoItem>
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
