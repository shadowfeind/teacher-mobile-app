import axios from "axios";
import { API_URL, tokenConfig } from "../../constants";
import {
  GET_ALL_ACADEMIC_STUDENT_EXAMDATA_FAIL,
  GET_ALL_ACADEMIC_STUDENT_EXAMDATA_REQUEST,
  GET_ALL_ACADEMIC_STUDENT_EXAMDATA_SUCCESS,
  GET_ALL_EXAM_ENTRY_BULK_FAIL,
  GET_ALL_EXAM_ENTRY_BULK_REQUEST,
  GET_ALL_EXAM_ENTRY_BULK_SUCCESS,
  GET_ALL_EXAM_ENTRY_SEARCHDATA_FAIL,
  GET_ALL_EXAM_ENTRY_SEARCHDATA_REQUEST,
  GET_ALL_EXAM_ENTRY_SEARCHDATA_SUCCESS,
  GET_EVENT_FAIL,
  GET_EVENT_REQUEST,
  GET_EVENT_SUCCESS,
  GET_EXAM_SCHEDULE_HEADER_FAIL,
  GET_EXAM_SCHEDULE_HEADER_REQUEST,
  GET_EXAM_SCHEDULE_HEADER_SUCCESS,
} from "./ExamMarkEntryConstants";

export const getAllAcademicStudentExamdataAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ACADEMIC_STUDENT_EXAMDATA_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/AcademicStudentExamData/GetAllAcademicStudentExamData
    `,
      tokenConfig
    );

    dispatch({
      type: GET_ALL_ACADEMIC_STUDENT_EXAMDATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ACADEMIC_STUDENT_EXAMDATA_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getEventAction = (year, program, classId) => async (dispatch) => {
  try {
    dispatch({ type: GET_EVENT_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/AcademicExamSchedule/GetActiveAcademicYearCalendar?idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}`,
      tokenConfig
    );

    dispatch({
      type: GET_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EVENT_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getEventScheduleAction =
  (year, program, classId, section, event) => async (dispatch) => {
    try {
      dispatch({ type: GET_EXAM_SCHEDULE_HEADER_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/GetActiveExamScheduleListForExamMarkEntry/${year}/${program}/${classId}/${section}/${event}/2
    `,
        tokenConfig
      );

      dispatch({
        type: GET_EXAM_SCHEDULE_HEADER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_EXAM_SCHEDULE_HEADER_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getExamEntrySearchDataAction =
  (year, program, classId, section, shift, event, schedule) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_EXAM_ENTRY_SEARCHDATA_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/GetLstAcademicStudentExamData/${year}/${program}/${classId}/${section}/${shift}/${event}/${schedule}/1
    `,
        tokenConfig
      );

      dispatch({
        type: GET_ALL_EXAM_ENTRY_SEARCHDATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_EXAM_ENTRY_SEARCHDATA_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getExamEntryBulkAction =
  (year, program, classId, section, shift, event, schedule) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_EXAM_ENTRY_BULK_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/GetBulk/${year}/${program}/${classId}/${section}/${shift}/${event}/${schedule}/1
    `,
        tokenConfig
      );

      dispatch({
        type: GET_ALL_EXAM_ENTRY_BULK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_EXAM_ENTRY_BULK_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
