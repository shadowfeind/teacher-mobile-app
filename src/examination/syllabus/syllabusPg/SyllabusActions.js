import axios from "axios";
import { API_URL, tokenConfig } from "../../../constants";
import {
  GET_ALL_SYLLABUS_FAIL,
  GET_ALL_SYLLABUS_REQUEST,
  GET_ALL_SYLLABUS_SUCCESS,
  GET_LIST_SYLLABUS_FAIL,
  GET_LIST_SYLLABUS_REQUEST,
  GET_LIST_SYLLABUS_SUCCESS,
} from "./SyllabusConstants";

export const getAllSyllabusAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_SYLLABUS_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/SyllabusTeacher/GetAllSyllabus`,
      tokenConfig
    );

    dispatch({
      type: GET_ALL_SYLLABUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_SYLLABUS_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getListSyllabusAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_SYLLABUS_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/SyllabusTeacher/GetListSyllabus/${id}?searchKey=1`,
      tokenConfig
    );

    dispatch({
      type: GET_LIST_SYLLABUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_SYLLABUS_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};
