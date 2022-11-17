import React from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
import MaskedInput from "react-text-mask";
import { useNavigate } from "react-router-dom";
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
  inputmasking: {
    padding: "15px",
    marginTop: "11px",
    borderRadius: "6px",
    borderColor: "black",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

const FirstStep = ({ formData, setFormData, setCount }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/secondStep");
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
        <MaskedInput
          className={classes.inputmasking}
          // id="depositedAmount"
          placeholder="0300 XXXX XXX"
          guide={false}
          mask={[
            /[0-9]/,
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          required={true}
          value={formData.contact}
          onChange={(e) =>
            setFormData({
              ...formData,
              contact: e.target.value,
            })
          }
          // className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {/* <TextField
          mask="(0)999 999 99 99"
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
        /> */}

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
      <div className={classes.button}>
        <Button
          variant="contained"
          color="light"
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
