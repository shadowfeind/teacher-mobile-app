import axios from "axios";
import { API_URL, tokenConfig } from "../../../constants";

import {
  GET_ALL_UPLOADPHOTO_FAIL,
  GET_ALL_UPLOADPHOTO_REQUEST,
  GET_ALL_UPLOADPHOTO_SUCCESS,
  UPLOADPHOTO_FAIL,
  UPLOADPHOTO_REQUEST,
  UPLOADPHOTO_SUCCESS,
} from "./UploadPhotoConstants";

export const getAllUploadPhotoAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_UPLOADPHOTO_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/PID_PhotoUpload/GetSingleToEditPhoto`,
      tokenConfig
    );

    dispatch({
      type: GET_ALL_UPLOADPHOTO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_UPLOADPHOTO_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const putUploadPhotoAction = (image, dbData) => async (dispatch) => {
  try {
    dispatch({ type: UPLOADPHOTO_REQUEST });

    let formData = new FormData();
    formData.append("ImageUploaded", image);

    const { data } = await axios.post(
      `${API_URL}/api/PID_PhotoUpload/FileUpload`,
      formData,
      tokenConfig
    );

    if (data) {
      const newData = {
        ...dbData,
        ...data,
      };
      const jsonData = JSON.stringify({
        hrEmployeeModel: newData,
      });
      console.log(jsonData);
      await axios.put(
        `${API_URL}/api/PID_PhotoUpload/PutPhoto`,
        jsonData,
        tokenConfig
      );
    }

    dispatch({
      type: UPLOADPHOTO_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UPLOADPHOTO_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};
