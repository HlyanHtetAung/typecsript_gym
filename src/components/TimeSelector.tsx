import React, { SetStateAction, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dispatch } from "react";

type TimeSelectorProp = {
  label: string;
  value: Dayjs | null;
  setTime: Dispatch<SetStateAction<any>>;
};

const TimeSelector = ({ value, label, setTime }: TimeSelectorProp) => {
  return (
    <div className="flex-1">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          className="w-full"
          label={label}
          value={value}
          onChange={(newValue) => {
            setTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default TimeSelector;
