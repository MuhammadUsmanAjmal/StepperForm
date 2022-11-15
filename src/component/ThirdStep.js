import React, { useContext, useState } from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
// import {AddStepperData} from "../Actions/userFormAction"
import {
  userCreateRequest,
  userGetRequest,
  userUpdateRequest,
} from "../Actions/userFormAction";
import { updateData } from "../App";
import {useNavigate } from "react-router-dom";
const useStyles = makeStyles((Theme) => ({
  registerform: {
    textAlign: "center",
    backgroundColor: "gray",
    textDecoration: "underline",
  },

  professionalDetail: {
    textAlign: "center",
    marginTop: "20px",
  },
  professionalDetailForm: {
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

const ThirdStep = ({
  formData,
  setFormData,
  setCount,
  setIsUpdate,
  isUpdate,
  // alert,
}) => {
  // const [disabledButton, setDisabledButton] = useState(true);

  const {updateItem} = useContext(updateData)
  const dispatch = useDispatch();
const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/table")
    // setCount(3);
    setFormData({
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
    dispatch(userCreateRequest(formData));
    dispatch(userGetRequest());
    // let thirdObj = Object.assign(professionalInputForm, secondStepValues.obj);
    // data.push(thirdObj);
    // setData([...data, thirdObj]);
    // localStorage.setItem("allData", JSON.stringify([...data]));
    // navigate("/table")
  };
  const handleUpdateSubmit = async (e,id) => {
    e.preventDefault();
    try {
      setIsUpdate(false);
      await dispatch(userUpdateRequest(formData,updateItem));
      navigate("/table")
      // setCount(3);
      setFormData({
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
      console.log(("update", formData));
      dispatch(userGetRequest());
    } catch (error) {}
  };

  const handleBack= () =>{
    navigate("/secondStep")
    setCount(2)
  }
  const handleFormDisabled = () => {
    if (!formData.designation || !formData.employer || !formData.experience) {
      return true;
    } else {
      return false;
    }
  };

  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.registerform} variant="h3">
        Register Form
      </Typography>

      <Typography className={classes.professionalDetail}>
        Step 3 (Professional Detail)
      </Typography>
      <div className={classes.professionalDetailForm}>
        <TextField
          label="Employer Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.employer}
          onChange={(e) =>
            setFormData({
              ...formData,
              employer: e.target.value,
            })
          }
        />
        <TextField
          label="Designation"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.designation}
          onChange={(e) =>
            setFormData({
              ...formData,
              designation: e.target.value,
            })
          }
        />
        <TextField
          label="Experience"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.experience}
          onChange={(e) =>
            setFormData({
              ...formData,
              experience: e.target.value,
            })
          }
        />
      </div>
      <div style={{ diaplay: "flex" }}>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="light"
            onClick={handleBack}
          >
            Back
          </Button>
        </div>
        {!isUpdate ? (
          <Typography className={classes.button}>
            <Button
              variant="contained"
              color="light"
              style={{
              cursor: handleFormDisabled() ? "not-allowed" : "pointer",}}
              disabled={handleFormDisabled()}
              onClick={handleSubmit}
              // disabled={
              //   !formData.designation ||
              //   !formData.employer ||
              //   !formData.experience
              // }
            >
                {/* <span>
                {alert?.loading && (
                  <div className="flex">
                    <ClipLoader
                      color="white"
                      loading={alert?.loading}
                      size={20}
                    />
                  </div>
                )}
              </span> */}
              Submit
            </Button>
          </Typography>
        ) : (
          <Typography className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => handleUpdateSubmit(e, formData._id)}
              disabled={
                !formData.designation ||
                !formData.employer ||
                !formData.experience
              }
            >
              Update
            </Button>
          </Typography>
        )}
      </div>
    </div>
  );
};

export default ThirdStep;
