import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableCellClasses } from "@mui/material/TableCell";
import { Typography, makeStyles, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import ClipLoader from "react-spinners/ClipLoader";
import { userDeleteRequest, userGetRequest } from "../Actions/userFormAction";
const ariaLabel = { "aria-label": "description" };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const useStyles = makeStyles((Theme) => ({
  registerform: {
    textAlign: "center",
    backgroundColor: "gray",
    textDecoration: "underline",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

const TableStep = ({ setFormData, setIsUpdate,alert }) => {
  const dispatch = useDispatch();

  const getData = useSelector((state) => state?.userGetRequest);
  const { getUser } = getData;
  const user = getUser;
  const { loading } = getData;
  console.log("user", user);

  useEffect(() => {
    dispatch(userGetRequest());
  }, []);

  const deleteItems = async (id) => {
    user?.filter((item) => {
      return item.id !== id;
    });
    await dispatch(userDeleteRequest(id));
    dispatch(userGetRequest());
  };

  const editItem = (id) => {
    let updateEditItems = user?.find((elem) => {
      return elem._id === id;
    });
    setIsUpdate(true);
    setFormData({ id, ...updateEditItems });
    console.log("updateEditItems", updateEditItems);
  };
  const classes = useStyles();

  function handleButton () {
    alert(user)
    console.warn("user",user)
  }
  useEffect(()=>{
    handleButton()
  },[user])
  return (
    <div>
      {loading ? (
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <ClipLoader loading={loading} size={70} />
        </Typography>
      ) : (
        <TableContainer
          component={Paper}
          style={{
            textAlign: "center",
            marginBottom: "32px",
            overflowY: "scroll",
            height: "300px",
            marginTop: "20px",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {user?.length > 0 && (
              <TableHead style={{ position: "sticky", top: "0px" }}>
                <TableRow style={{ backgroundColor: "gray" }}>
                  <StyledTableCell>Sr Number</StyledTableCell>
                  <StyledTableCell>FirstName</StyledTableCell>
                  <StyledTableCell>SecondName</StyledTableCell>
                  <StyledTableCell>ContactNumber</StyledTableCell>
                  <StyledTableCell>DateOfBirth</StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                  <StyledTableCell>UniversityName</StyledTableCell>
                  <StyledTableCell>DegreeName</StyledTableCell>
                  <StyledTableCell>YearOfEducation</StyledTableCell>
                  <StyledTableCell>EmployerName</StyledTableCell>
                  <StyledTableCell>Designation</StyledTableCell>
                  <StyledTableCell>Experience</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </TableRow>
              </TableHead>
            )}
            <TableBody>
              {user &&
                user?.map((item, index) => {
                  return (
                    <TableRow key={item?.id}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.firstName}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.lastName}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.contact}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.dateOfBirth}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.address}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.university}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.degree}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.graduation}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.employer}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.designation}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.experience}
                      </StyledTableCell>
                      <StyledTableCell
                        // align="right"
                        sx={{ display: "flex", cursor: "pointer" }}
                      >
                        <img
                          src="https://img.icons8.com/fluency/48/000000/delete-forever.png"
                          width={30}
                          title="Delete-Item"
                          onClick={() => deleteItems(item._id)}
                        />
                        <img
                          src="https://img.icons8.com/color-glass/48/000000/edit.png"
                          width={30}
                          title="Edit-Item"
                          onClick={() => editItem(item._id)}
                        />
                      </StyledTableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default TableStep;
