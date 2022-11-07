import React, { useState } from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((Theme) => ({
  registerform: {
    textAlign: "center",
    backgroundColor: "gray",
    textDecoration: "underline",
  },
  personalDetail: {
    textAlign: "center",
    marginTop: "20px",
  },
  userDetailForm: {
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

const FirstStep = ({ formData, setFormData, setCount }) => {
  const [disabledButton, setDisabledButton] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(2);
  };

  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.registerform} variant="h3">
        Register Form
      </Typography>

      <Typography className={classes.personalDetail}>
        Step 1 (Personal Detail)
      </Typography>

      <div className={classes.userDetailForm}>
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({
              ...formData,
              firstName: e.target.value,
            })
          }
        />

        <TextField
          label="Second Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.contact}
          onChange={(e) =>
            setFormData({
              ...formData,
              contact: e.target.value,
            })
          }
        />

        <TextField
          id="date"
          type="date"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.dateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, dateOfBirth: e.target.value })
          }
        />

        <TextField
          label="Address"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </div>
      <div
        className={classes.button}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={
            !formData.firstName ||
            !formData.lastName ||
            !formData.contact ||
            !formData.dateOfBirth ||
            !formData.address
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
