import axios from "axios";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGN_RESET 
} from "../Constants/userSignInConstant";

export const userSignIn = (signInForm) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST,
      Accept: "application/json",
    });

    const { data } = await axios.post("https://crudnodejsproj.herokuapp.com/auth/signin", signInForm);
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("accessToken", data?.token);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error?.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const userSignUp = (signUpForm) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST,
      Accept: "application/json",
    });

    const { data } = await axios.post(
      "https://crudnodejsproj.herokuapp.com/auth/signup",
      signUpForm
    );

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });
    localStorage.setItem("accessToken", data?.token);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error?.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};
