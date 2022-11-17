import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, makeStyles, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import ClipLoader from "react-spinners/ClipLoader";
import { userDeleteRequest, userGetRequest } from "../Actions/userFormAction";
import { updateData } from "../App";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../Actions/userSignInAction";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const useStyles = makeStyles((theme) => ({
  table: {
    display: "flex",
    textAlign: "center",
    backgroundColor: "gray",
  },
  button: {
    margin: "10px",
  },
}));

const TableStep = ({ setFormData, setIsUpdate, setCount }) => {
  const { setUpdateItem } = useContext(updateData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userSignIn);
  const { SignIn } = userLogin;
  console.log("signIN", userLogin);
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    setCount(1);
  };

  const getData = useSelector((state) => state?.userGetRequest);
  const { getUser } = getData;
  const { loading } = getData;

  useEffect(() => {
    dispatch(userGetRequest());
  }, []);

  const deleteItems = async (id) => {
    getUser?.filter((item) => {
      return item.id !== id;
    });
    await dispatch(userDeleteRequest(id));
    dispatch(userGetRequest());
  };

  const handleSubmitUser = () => {
    navigate("/firstStep");
    setCount(4);
  };

  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };

  const classes = useStyles();
  return (
    <div>
      <Navbar
        sticky="top"
        style={{ backgroundColor: "gray" }}
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand
            style={{
              fontSize: "30px",
              color: "white",
              textDecoration: "underline",
            }}
          >
            Table Form
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5 text-white">
              {userLogin ? (
                <NavDropdown
                  id="username"
                  title={userLogin?.userSignIn?.result?.name}
                >
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link
                  style={{ color: "white", marginTop: "8px" }}
                  onClick={() => navigate("/")}
                  // setCount(1)
                >
                  <i className="fas fa-user"></i> SIGN IN
                </Nav.Link>
              )}
            </Nav>
            <div className={classes.button}>
              <Button
                variant="contained"
                color="light"
                onClick={handleSubmitUser}
              >
                Add New User
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
          }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            {getUser?.length > 0 && (
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
                  <StyledTableCell>Delete</StyledTableCell>
                  <StyledTableCell>Edit</StyledTableCell>
                </TableRow>
              </TableHead>
            )}
            <TableBody>
              {getUser &&
                getUser?.map((item, index) => {
                  return (
                    <StyledTableRow key={item?.id}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="item">
                        {item?.firstName}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item?.lastName}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item?.contact}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item?.dateOfBirth}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item?.address}
                      </StyledTableCell>
                      {item?.education?.map((data) => {
                        return (
                          <>
                            <StyledTableCell component="th" scope="row">
                              {data?.university}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              {data?.degree}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              {data?.graduation}
                            </StyledTableCell>
                          </>
                        );
                      })}
                      {item?.profession?.map((data) => {
                        return (
                          <>
                            <StyledTableCell component="th" scope="row">
                              {data?.employer}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              {data?.designation}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              {data?.experience}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              <img
                                src="https://img.icons8.com/fluency/48/000000/delete-forever.png"
                                width={30}
                                title="Delete-Item"
                                alt=""
                                onClick={() => deleteItems(item._id)}
                              />
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              <img
                                src="https://img.icons8.com/color-glass/48/000000/edit.png"
                                width={30}
                                alt=""
                                title="Edit-Item"
                                onClick={() => {
                                  setUpdateItem(item._id);
                                  setFormData({
                                    firstName: item.firstName,
                                    lastName: item.lastName,
                                    contact: item.contact,
                                    dateOfBirth: item.dateOfBirth,
                                    address: item.address,
                                    university: item?.education[0]?.university,
                                    degree: item?.education[0]?.degree,
                                    graduation: item?.education[0]?.graduation,
                                    employer: item?.profession[0]?.employer,
                                    designation:
                                      item?.profession[0]?.designation,
                                    experience: item?.profession[0]?.experience,
                                  });
                                  navigate("/firstStep");
                                  setCount(4);
                                  setIsUpdate(true);
                                }}
                              />
                            </StyledTableCell>
                          </>
                        );
                      })}
                    </StyledTableRow>
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
