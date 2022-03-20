import axios from "axios";
import { API_URL, tokenConfig } from "../../../constants";
import {
  GET_ALL_OTHER_OPTIONS_FOR_SELECT_FAIL,
  GET_ALL_OTHER_OPTIONS_FOR_SELECT_REQUEST,
  GET_ALL_OTHER_OPTIONS_FOR_SELECT_SUCCESS,
  GET_ALL_STUDEN_MONTHLY_PRESENT_SHEET_FAIL,
  GET_ALL_STUDEN_MONTHLY_PRESENT_SHEET_REQUEST,
  GET_ALL_STUDEN_MONTHLY_PRESENT_SHEET_SUCCESS,
  GET_ENGLISH_DATE_FAIL,
  GET_ENGLISH_DATE_REQUEST,
  GET_ENGLISH_DATE_SUCCESS,
  GET_LIST_FOR_PRESENT_STUDENT_FAIL,
  GET_LIST_FOR_PRESENT_STUDENT_REQUEST,
  GET_LIST_FOR_PRESENT_STUDENT_SUCCESS,
  GET_LIST_FOR_UPDATE_STUDENT_PRESENT_FAIL,
  GET_LIST_FOR_UPDATE_STUDENT_PRESENT_REQUEST,
  GET_LIST_FOR_UPDATE_STUDENT_PRESENT_SUCCESS,
  GET_LIST_STUDENT_PRESENT_FAIL,
  GET_LIST_STUDENT_PRESENT_REQUEST,
  GET_LIST_STUDENT_PRESENT_SUCCESS,
  GET_SUBJECT_OPTIONS_FOR_SELECT_FAIL,
  GET_SUBJECT_OPTIONS_FOR_SELECT_REQUEST,
  GET_SUBJECT_OPTIONS_FOR_SELECT_SUCCESS,
  POST_LIST_STUDENT_PRESENT_FAIL,
  POST_LIST_STUDENT_PRESENT_REQUEST,
  POST_LIST_STUDENT_PRESENT_SUCCESS,
} from "./StudentMonthlyPresentSheetConstants";

export const getAllStudentPresentSheetDataAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_STUDEN_MONTHLY_PRESENT_SHEET_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/StudentPresentSheetTeacher/GetAllStudentPresentSheet`,
      tokenConfig
    );

    dispatch({
      type: GET_ALL_STUDEN_MONTHLY_PRESENT_SHEET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_STUDEN_MONTHLY_PRESENT_SHEET_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getAllOtherOptionsForSelectAction =
  (id, subject) => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_OTHER_OPTIONS_FOR_SELECT_REQUEST });

      const year = await axios.get(
        `${API_URL}/api/StudentPresentSheetTeacher/GetAttendanceForAcademicYear?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}`,
        tokenConfig
      );

      const program = await axios.get(
        `${API_URL}/api/StudentPresentSheetTeacher/GetCurseDeliveryPlanForFacultyProgram?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}`,
        tokenConfig
      );

      const classId = await axios.get(
        `${API_URL}/api/StudentPresentSheetTeacher/GetCurseDeliveryPlanForLevel?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}`,
        tokenConfig
      );

      const section = await axios.get(
        `${API_URL}/api/StudentPresentSheetTeacher/GetCurseDeliveryPlanForSection?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}`,
        tokenConfig
      );

      const shift = await axios.get(
        `${API_URL}/api/StudentPresentSheetTeacher/GetCurseDeliveryPlanForShift?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}`,
        tokenConfig
      );

      const data = {
        year: year.data,
        program: program.data,
        classId: classId.data,
        section: section.data,
        shift: shift.data,
      };

      dispatch({
        type: GET_ALL_OTHER_OPTIONS_FOR_SELECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_OTHER_OPTIONS_FOR_SELECT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

//not needed in teacher dashboard
export const getSubjectOptionsForSelectAction =
  (year, program, classId) => async (dispatch) => {
    try {
      dispatch({ type: GET_SUBJECT_OPTIONS_FOR_SELECT_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/StudentPresentSheet/GetPopulateSubjectByLevel?idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}`,
        tokenConfig
      );

      dispatch({
        type: GET_SUBJECT_OPTIONS_FOR_SELECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SUBJECT_OPTIONS_FOR_SELECT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
//not needed in teacher dashboard

export const getEnglishDateAction = (year, month) => async (dispatch) => {
  try {
    dispatch({ type: GET_ENGLISH_DATE_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/StudentPresentSheet/GetEngDate?year=${year}&month=${month}`,
      tokenConfig
    );

    dispatch({
      type: GET_ENGLISH_DATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ENGLISH_DATE_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getListStudentPresentAction =
  (
    year,
    program,
    classId,
    subject,
    section,
    shift,
    npYear,
    npMonth,
    currentDate
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_LIST_STUDENT_PRESENT_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/StudentPresentSheetTeacher/GetListStudentPresentSheet?currentDate=${currentDate}&npYear=${npYear}&npMonth=${npMonth}&idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}&idAcademicFacultySubjectLink=${subject}&section=${section}&idShift=${shift}&searchKey=1`,
        tokenConfig
      );

      dispatch({
        type: GET_LIST_STUDENT_PRESENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_STUDENT_PRESENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getListForUpdateStudentPresentAction =
  (
    currentDate,
    npYear,
    npMonth,
    year,
    program,
    classId,
    subject,
    section,
    shift
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_LIST_FOR_UPDATE_STUDENT_PRESENT_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/StudentPresentSheetTeacher/GetSingleToCreateStudentPresentSheet?currentDate=${currentDate}&npYear=${npYear}&npMonth=${npMonth}&idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}&idAcademicFacultySubjectLink=${subject}&section=${section}&idShift=${shift}&searchKey=1`,
        tokenConfig
      );

      dispatch({
        type: GET_LIST_FOR_UPDATE_STUDENT_PRESENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_FOR_UPDATE_STUDENT_PRESENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getListForPresentStudentAction =
  (currentDate, program, subject) => async (dispatch) => {
    try {
      dispatch({ type: GET_LIST_FOR_PRESENT_STUDENT_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/StudentPresentSheet/GetPresentOrAbsent?currentDate=${currentDate}&idStudentFacultyLevel=${program}&IdSubject=${subject}`,
        tokenConfig
      );

      dispatch({
        type: GET_LIST_FOR_PRESENT_STUDENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_FOR_PRESENT_STUDENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const postStudentPresentListAction =
  (attendance, searchFilterModel) => async (dispatch) => {
    try {
      dispatch({ type: POST_LIST_STUDENT_PRESENT_REQUEST });

      const jsonData = JSON.stringify({
        dbStudentClassAttendanceModelAttendanceLst: attendance,
        searchFilterModel,
      });

      const { data } = await axios.post(
        `${API_URL}/api/StudentPresentSheetTeacher/PostStudentPresentSheet`,
        jsonData,
        tokenConfig
      );

      dispatch({ type: POST_LIST_STUDENT_PRESENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POST_LIST_STUDENT_PRESENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
