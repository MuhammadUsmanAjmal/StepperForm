import {
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_GET_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from "../Constants/userFormConstant";
import axios from "axios";

export const userCreateRequest = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CREATE_REQUEST,
      Accept: "application/json",
    });
    await axios.post(
      " https://crudnodejsproj.herokuapp.com/users/create",
      formData
    );
    dispatch({
      type: USER_CREATE_SUCCESS,
      payload: formData,
    });
  } catch (error) {
    dispatch({
      type: USER_CREATE_FAIL,
      payload: error.response && error.response.data,
    });
  }
};

export const userGetRequest = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_GET_REQUEST,
      Accept: "application/json",
    });
    const { data } = await axios.get(
      " https://crudnodejsproj.herokuapp.com/users"
    );
    dispatch({
      type: USER_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_GET_FAIL,
      payload: error.response && error.response.data,
    });
  }
};

export const userUpdateRequest = (formData, id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
      Accept: "application/json",
    });

    await axios.patch(
      `https://crudnodejsproj.herokuapp.com/users/${id}`,
      formData
    );
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: formData,
    });
    console.log(formData);
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error.response && error.response.data,
    });
  }
};

export const userDeleteRequest = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
      Accept: "application/json",
    });
    const { data } = await axios.delete(
      `https://crudnodejsproj.herokuapp.com/users/${id}`
    );
    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error.response && error.response.data,
    });
  }
};

// export const AddStepperData = (data) =>{
//   return {
//     type: "StepperData",
//     payload: data,
//   };

// }
