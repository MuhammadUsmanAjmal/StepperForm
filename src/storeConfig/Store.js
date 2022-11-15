import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  // userRegisterReducer,
  userCreateReducers,
  userGetReducers,
  userUpdateReducers,
  userDeleteReducers,
} from "../Reducers/userFormReducer";
import { userSignInReducers,userSignUpReducers } from "../Reducers/userSignInReducer";
// import userFormReducer from "../Reducers/userFormReducer";
const reducer = combineReducers({
  userCreateRequest: userCreateReducers,
  userGetRequest: userGetReducers,
  userUpdateRequest: userUpdateReducers,
  userDeleteRequest: userDeleteReducers,
  userSignIn: userSignInReducers,
  userSignUp: userSignUpReducers
  // userRegisterReducer: userRegisterReducer,
  //   userEducationalDetail: userEducationalDetailReducer,
  //   userProfessionalDetail: userProfessionalDetailReducer,
//   userFormReducer: userFormReducer,
});
const userSignInFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const userSignUpFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initailState = {
  userSignIn: { userSignIn: userSignInFromStorage },
  userSignUp: { userSignUp: userSignUpFromStorage },
};
const store = createStore(
  reducer,
  initailState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// import { createStore,combineReducers } from "redux";
// // import rootReducer from "../Reducers/index";
// import userFormReducer from "../Reducers/userFormReducer";

// const reducer = combineReducers({
//     userFormReducer,
// });
// const store = createStore(reducer);

// export default store;
