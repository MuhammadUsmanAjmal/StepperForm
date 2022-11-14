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

export const userSignInReducers = (state = {}, action) => {
  switch (action.type) {
    case  USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, SignIn: action.payload,success:true };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
      case USER_LOGOUT:
        return {};
    default:
      return state;
  }
};


export const userSignUpReducers = (state = {}, action) => {
  switch (action.type) {
      case USER_SIGNUP_REQUEST:
          return { loading: true };
      case USER_SIGNUP_SUCCESS:
          return { loading: false, SignUp: action.payload,  success:true };
      case  USER_SIGNUP_FAIL:
          return { loading: false, error: action.payload };
          case USER_SIGN_RESET :
            return { loading: false, error: false, success: false, SignUp: {} }
      default:
          return state;
  }
};