import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { DateRangePicker, DateRange, DateRangeDelimiter } from "@material-ui/pickers";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  const handleChange = (newValue) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <DateRangePicker
      startText="Check-in"
      endText="Check-out"
      value={value}
      onChange={(newValue) => handleChange(newValue)}
      renderInput={(startProps, endProps) => (
        <React.Fragment>
          <TextField {...startProps} />
          <DateRangeDelimiter> to </DateRangeDelimiter>
          <TextField {...endProps} />
        </React.Fragment>
      )}
    />
  );
}
