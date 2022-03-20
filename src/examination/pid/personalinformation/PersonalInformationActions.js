import axios from "axios";
import { API_URL, tokenConfig } from "../../../constants";
import {
  GET_ALL_PERSONALINFORMATION_FAIL,
  GET_ALL_PERSONALINFORMATION_REQUEST,
  GET_ALL_PERSONALINFORMATION_SUCCESS,
  GET_SINGLE_PERSONALINFORMATION_FAIL,
  GET_SINGLE_PERSONALINFORMATION_REQUEST,
  GET_SINGLE_PERSONALINFORMATION_SUCCESS,
  UPDATE_SINGLE_PERSONALINFORMATION_FAIL,
  UPDATE_SINGLE_PERSONALINFORMATION_REQUEST,
  UPDATE_SINGLE_PERSONALINFORMATION_SUCCESS,
} from "./PersonalInformationConstants";

export const getAllPersonalInformationAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PERSONALINFORMATION_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/PID_PersonalInformation/GetAllPIDPersonalInformation?searchKey=1`,
      tokenConfig
    );

    dispatch({ type: GET_ALL_PERSONALINFORMATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PERSONALINFORMATION_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getSinglePersonalInformationAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PERSONALINFORMATION_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/PID_PersonalInformation/GetSingleEdit?searchKey=1`,
      tokenConfig
    );

    dispatch({ type: GET_SINGLE_PERSONALINFORMATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PERSONALINFORMATION_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const updateSinglePersonalInformationAction =
  (personalInformation) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_SINGLE_PERSONALINFORMATION_REQUEST });

      const jsonData = JSON.stringify({ dbModel: personalInformation });

      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };

      const { data } = await axios.put(
        `${API_URL}/api/PID_PersonalInformation/Put`,
        jsonData,
        tokenConfig
      );

      dispatch({
        type: UPDATE_SINGLE_PERSONALINFORMATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SINGLE_PERSONALINFORMATION_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
