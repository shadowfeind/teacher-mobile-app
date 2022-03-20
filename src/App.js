import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import BottomNavigationMis from "./components/BottomNavigationMis";

const StudentMonthlyPresentSheetUpdateForm = lazy(() =>
  import(
    "./examination/attendance/studentMonthlyPresentSheet/StudentMonthlyPresentSheetUpdateForm"
  )
);
const StudentMonthlyPresentSheetMobileTable = lazy(() =>
  import(
    "./examination/attendance/studentMonthlyPresentSheet/StudentMonthlyPresentSheetMobileTable"
  )
);
const DashboardSubjectView = lazy(() =>
  import("./examination/dashboard/DashboardSubjectView")
);
const PageNotFound = lazy(() =>
  import("./examination/pageNotFound/PageNotFound")
);
const VideoConference = lazy(() =>
  import("./examination/videoConference/VideoConference")
);
const Assignment = lazy(() => import("./examination/assignment/Assignment"));
const Attendance = lazy(() => import("./examination/attendance/Attendance"));
const Dashboard = lazy(() => import("./examination/dashboard/Dashboard"));
const Pid = lazy(() => import("./examination/pid/Pid"));
const QuickLinks = lazy(() => import("./examination/quickLinks/QuickLinks"));
const Resources = lazy(() => import("./examination/resources/Resources"));
const Syllabus = lazy(() => import("./examination/syllabus/syllabusMain"));
const OldQuestions = lazy(() =>
  import("./examination/oldQuestions/OldQuestions")
);
const AcademicGrading = lazy(() =>
  import("./examination/academicGrading/AcademicGrading")
);
const ExamDivision = lazy(() =>
  import("./examination/examDivision/ExamDivision")
);
const ExamSchedule = lazy(() =>
  import("./examination/examSchedule/ExamSchedule")
);
const ClassSchedule = lazy(() =>
  import("./examination/classSchedule/ClassSchedule")
);
const ExamMarkEntry = lazy(() =>
  import("./examination/examMarkEntry/ExamMarkEntry")
);
const ExamMarkApprovalTeacher = lazy(() =>
  import("./examination/examMarkApprovalTeacher/ExamMarkApprovalTeacher")
);

const theme = createTheme({
  palette: {
    background: {
      // default: "#eaeff5",
      default: "#fff",
    },
    customColor: {
      main: "#253053",
    },
  },
  status: {
    danger: "orange",
  },
  MuiButtonRoot: {
    minWidth: "10px",
    fontSize: "12px",
  },
});

const useStyles = makeStyles({
  appMain: {
    width: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.appMain}>
          <Header />
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route path={"/exam-division"} component={ExamDivision} />
              <Route path={"/exam-schedule"} component={ExamSchedule} />
              <Route path={"/exam-mark-entry"} component={ExamMarkEntry} />
              <Route path={"/pid"} component={Pid} />
              <Route path={"/quick-links"} component={QuickLinks} />
              <Route path={"/resources/:id?"} component={Resources} />
              <Route path={"/syllabus"} component={Syllabus} />
              <Route path={"/class-schedule"} component={ClassSchedule} />
              <Route path={"/old-questions"} component={OldQuestions} />
              <Route path={"/attendance"} exact component={Attendance} />
              <Route
                path={"/attendance/table-details"}
                component={StudentMonthlyPresentSheetMobileTable}
              />
              <Route
                path={"/attendance/table-edit"}
                component={StudentMonthlyPresentSheetUpdateForm}
              />
              <Route
                path={"/exam-mark-approval"}
                component={ExamMarkApprovalTeacher}
              />
              <Route path={"/assignment/:id?"} component={Assignment} />
              <Route path={"/video-conference"} component={VideoConference} />
              <Route
                exact
                path={"/academic-grading"}
                component={AcademicGrading}
              />
              <Route
                exact
                path={"/subject-view/:id"}
                component={DashboardSubjectView}
              />
              <Route exact path={"/"} component={Dashboard} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Suspense>
          <BottomNavigationMis />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
};

export default App;
