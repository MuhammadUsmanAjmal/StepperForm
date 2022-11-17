import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../Actions/userSignInAction";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((Theme) => ({
  signupform: {
    textAlign: "center",
    backgroundColor: "gray",
    textDecoration: "underline",
  },

  usersignupForm: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    marginLeft: "30%",
  },

  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

const SignUpForm = ({ signUpForm, setSignUpForm, setCount }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const user = useSelector((state) => state?.userSignUp);
  const { loading, error, success } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUpForm.email !== "") {
      setMessage("Email Is Valid");
    }
    dispatch(userSignUp(signUpForm));
  };
  useEffect(() => {
    if (success) {
      navigate("/table");
    }
    if (error) {
      toast(error);
    }
    setMessage(false);
  }, [success,error]);

  const handleRegister = (e) => {
    e.preventDefault();
    setCount(1);
    navigate("/");
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const emailvalidation = (e) => {
    setSignUpForm({ ...signUpForm, email: e.target.value });

    if (pattern.test(signUpForm.email) === false) {
      setErrorMsg("Please Enter Valid Email Address");
    } else {
      setErrorMsg("");
      return true;
    }
  };
  return (
    <div>
      <Typography className={classes.signupform} variant="h3">
        Sign Up Form
      </Typography>

      <ToastContainer />
      {/* {error && toast(error)} */}

      <div className={classes.usersignupForm}>
        <TextField
          label="FirstName"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={signUpForm.firstName}
          onChange={(e) =>
            setSignUpForm({
              ...signUpForm,
              firstName: e.target.value,
            })
          }
        />

        <TextField
          label="LastName"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={signUpForm.lastName}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, lastName: e.target.value })
          }
        />
        <TextField
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
          color="secondary"
          // className={
          //   email.length === 0
          //     ? "input-control fill-email"
          //     : message
          //     ? "input-control valid-email"
          //     : "input-control invalid-email"
          // }
          value={signUpForm.email}
          // value={email}
          onChange={emailvalidation}

          // onChange={(e) =>
          //   setSignUpForm({ ...signUpForm, email: e.target.value })
          // }
        />
        <Typography className="text-danger ">{errorMsg}</Typography>
        <Typography className="text-success ">{message}</Typography>
        {/* <div
        style={{
          fontSize: "20px",
          position:"absolute",
          marginTop: "190px",
          marginLeft:"300px"
          // marginRight: "2",
        }}
          className={
            email.length === 0
              ? "icon fill-color"
              : message
              ? "icon-check-color"
              : "icon-error-color"
          }
        >
          <i className="fa-solid fa-exclamation-circle"></i>
        </div> */}

        <FormControl variant="outlined" style={{ marginTop: "20px" }}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={signUpForm.password}
            onChange={(e) =>
              setSignUpForm({ ...signUpForm, password: e.target.value })
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleToggle}
                  edge="end"
                >
                  {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl variant="outlined" style={{ marginTop: "20px" }}>
          <InputLabel htmlFor="outlined-adornment-password">
            ConfirmPassword
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={signUpForm.confirmPassword}
            onChange={(e) =>
              setSignUpForm({ ...signUpForm, confirmPassword: e.target.value })
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleToggle}
                  edge="end"
                >
                  {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </IconButton>
              </InputAdornment>
            }
            label="confirmPassword"
          />
        </FormControl>

        <div style={{ diaplay: "flex" }}>
          <div className={classes.button}>
            <Button
              variant="contained"
              color="light"
              onClick={handleSubmit}
              disabled={
                !signUpForm.firstName ||
                !signUpForm.lastName ||
                !emailvalidation ||
                !signUpForm.password ||
                !signUpForm.confirmPassword
              }
            >
              Sign Up
              {loading && <Loader />}
            </Button>
          </div>
          <div className={classes.button}>
            <Button variant="contained" color="light" onClick={handleRegister}>
              Have An Account ? SignIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
