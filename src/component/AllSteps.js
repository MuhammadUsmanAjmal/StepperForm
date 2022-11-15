import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import TableStep from "./TableStep";
import ThirdStep from "./ThirdStep";
const AllSteps = () => {
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    dateOfBirth: "",
    address: "",
    university: "",
    degree: "",
    graduation: "",
    employer: "",
    designation: "",
    experience: "",
  });
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);
  // const getData =(data) =>{
  // console.log("coming from table.js to thirdstep.js",data);
  // }

  const Token = localStorage.getItem("accessToken");

  return (
    <div className="AllStep">
      {/* {count === 1 && ( */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SignInForm
              signInForm={signInForm}
              setSignInForm={setSignInForm}
              count={count}
              setCount={setCount}
            />
          }
        />
        {/* )} */}
        {/* {count === 2 && ( */}
        <Route
          exact
          path="/signup"
          element={
            <SignUpForm
              signUpForm={signUpForm}
              setSignUpForm={setSignUpForm}
              count={count}
              setCount={setCount}
            />
          }
        />
        {/* )} */}

        {/* { count === 3 &&    */}
        <Route
          exact
          path="/table"
          element={
            <TableStep
              setFormData={setFormData}
              formData={formData}
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
              setCount={setCount}
              count={count}
            />
          }
        />
      {/* } */}
      {/* {count === 1 && ( */}
        <Route
          exact
          path="/firstStep"
          element={
            <FirstStep
            count={count}
            setCount={setCount}
            formData={formData}
            setFormData={setFormData}
            />
          }
          />
          {/* )}  */}
      {count === 2 && (
         <Route
         exact
         path="/secondStep"
         element={
        <SecondStep
        count={count}
        setCount={setCount}
        formData={formData}
        setFormData={setFormData}
        />}
        />
        )}
      {count === 3 && (
         <Route
         exact
         path="/thirdStep"
         element={
        <ThirdStep
          count={count}
          setCount={setCount}
          formData={formData}
          setFormData={setFormData}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          />
         }/>
          )}
          </Routes>
    </div>
  );
};

export default AllSteps;
