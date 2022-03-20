import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WorkIcon from "@material-ui/icons/Work";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: "0",
    boxShadow: "0 0 5px #d3d3d3",
    "& .Mui-selected": {
      fontSize: "10px",
      color: "#253053",
    },
    "& .MuiBottomNavigationAction-label": {
      fontSize: "10px",
    },
  },
});

const BottomNavigationMis = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
          history.push("/");
        } else if (newValue === 1) {
          history.push("/attendance");
        } else if (newValue === 2) {
          history.push("/assignment");
        } else if (newValue === 3) {
          history.push("/resources");
        } else {
          history.push("/pid");
        }
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
      <BottomNavigationAction label="Calendar" icon={<DateRangeIcon />} />
      <BottomNavigationAction label="Assignment" icon={<AssignmentIcon />} />
      <BottomNavigationAction label="Resources" icon={<WorkIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountBoxIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavigationMis;
