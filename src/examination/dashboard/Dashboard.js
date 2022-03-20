import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Card } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { School, PeopleOutline, Face, Settings } from "@material-ui/icons";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment, { months } from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { GET_TEACHER_DASHBOARD_RESET } from "./DashboardConstants";
import { getDashboardContentAction } from "./DashboardActions";
import Notification from "../../components/Notification";
import DashboardCard from "./DashboardCard";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    padding: "10px 10px 60px 10px",
    "& a": {
      textDecoration: "none",
    },
  },
  gridStyle: {
    "&:hover": {
      marginTop: "-10px",
    },
  },
}));

const Dashboard = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const { dashboardContent, error } = useSelector(
    (state) => state.getDashboardContent
  );

  if (error) {
    setNotify({
      isOpen: true,
      message: error,
      type: "error",
    });
    dispatch({ type: GET_TEACHER_DASHBOARD_RESET });
  }

  useEffect(() => {
    if (!dashboardContent) {
      dispatch(getDashboardContentAction());
    }
  }, [dispatch, dashboardContent]);
  const localizer = momentLocalizer(moment);

  return (
    <>
      <div className={classes.dashboardContainer}>
        {dashboardContent &&
          dashboardContent.searchFilterModel.ddlSubjectForTeacher.map((s) => (
            <Link key={s.id} to={`/subject-view/${s.Key}`}>
              <DashboardCard subject={s} key={s.id} />
            </Link>
          ))}
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default Dashboard;
