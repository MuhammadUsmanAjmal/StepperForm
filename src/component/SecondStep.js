import React, { useState } from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((Theme) => ({
  registerform: {
    textAlign: "center",
    backgroundColor: "gray",
    textDecoration: "underline",
  },

  educationaldetail: {
    textAlign: "center",
    marginTop: "20px",
  },
  educationDetailForm: {
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

const SecondStep = ({ formData, setFormData, setCount }) => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(6)
    // let obj = Object.assign(educationInputForm,userInputFormStepOne?.userInputForm)
    // navigate("/professionalDetail", {
    //   state: { obj },
    // });
    // localStorage.setItem("SecondStep",JSON.stringify(educationInputForm))
  };

  return (
    <div>
      <Typography className={classes.registerform} variant="h3">
        Register Form
      </Typography>

      <Typography className={classes.educationaldetail}>
        Step 2 (Educational Detail)
      </Typography>
      <div className={classes.educationDetailForm}>
        <TextField
          label="University Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.university}
          onChange={(e) =>
            setFormData({
              ...formData,
              university: e.target.value,
            })
          }
        />
        <TextField
          label="Degree Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.degree}
          onChange={(e) =>
            setFormData({
              ...formData,
              degree: e.target.value,
            })
          }
        />
        <TextField
          label="Year Of Graduation"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.graduation}
          onChange={(e) =>
            setFormData({
              ...formData,
              graduation: e.target.value,
            })
          }
        />
      </div>
      <div style={{ diaplay: "flex" }}>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="light"
            onClick={(e) => setCount(4)}
          >
            Back
          </Button>
        </div>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="light"
            onClick={handleSubmit}
            disabled={
              !formData.university || !formData.degree || !formData.graduation
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
