import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dateClass: {
    fontSize: "16px",
    "& input": {
      padding: "16px",
    },
  },
}));

const DatePickerControl = ({ name, label, value, onChange }) => {
  const classes = useStyles();
  const converToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd-MM-yyyy"
        inputVariant="outlined"
        label={label}
        name={name}
        value={value}
        className={classes.dateClass}
        onChange={(date) => {
          onChange(converToDefaultEventPara(name, date));
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerControl;
