import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../Actions/userSignInAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Loader from "./Loader";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Navigate, useNavigate } from "react-router-dom";
const useStyles = makeStyles((Theme) => ({
  signinform: {
    textAlign: "center",
    backgroundColor: "gray",
    textDecoration: "underline",
  },
  personalDetail: {
    textAlign: "center",
    marginTop: "20px",
  },
  usersigninForm: {
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

const SignInForm = ({ signInForm, setSignInForm, setCount }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const signinUser = useSelector((state) => state?.userSignIn);
  const { loading, error, success } = signinUser;
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signInForm.email !== ""){
      setMessage("Email Is Valid")
    }
   await dispatch(userSignIn(signInForm));
    // dispatch(getRequest())
  };

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  const emailvalidation = (e) =>{
    setSignInForm({...signInForm ,email : e.target.value});

    if (pattern.test(signInForm.email) === false){
      setErrorMsg("Please Enter Valid Email Address")
    }
    else{
      setErrorMsg("")
      return true
    }
  }

  useEffect(()=>{

    if (success) {
    navigate("/table")
      //  setCount(3);
    }
    if (error) {
       toast(error);
    }
    setMessage(false);
  },[success,error])

  const handleRegister = () => {
    setCount(2);
    navigate("/signup")
  };
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      {/* {error && toast(error)} */}
      <Typography className={classes.signinform} variant="h3">
        Sign in Form
      </Typography>
      <ToastContainer />
      
      <div className={classes.usersigninForm}>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={signInForm.email}
          onChange={emailvalidation}
          // onChange={(e) =>
          //   setSignInForm({
          //     ...signInForm,
          //     email: e.target.value,
          //   })
          // }
        />
<Typography className="text-danger ">{errorMsg}</Typography>
        <Typography className="text-success ">{message}</Typography>

        <FormControl variant="outlined" style={{marginTop:"20px"}}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={signInForm.password}
            onChange={(e) =>
              setSignInForm({ ...signInForm, password: e.target.value })
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
        <div style={{ diaplay: "flex" }}>
          <div className={classes.button}>
            <Button
              variant="contained"
              color="light"
              onClick={handleSubmit}
              disabled={!signInForm.email || !signInForm.password}
            >
              Sign In
              {loading && <Loader />}
            </Button>
          </div>
          <div className={classes.button}>
            <Button variant="contained" color="light" onClick={handleRegister}>
              New User ? Register Here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
