import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { billingDetails } from "../dashboardRow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";

const Billing = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {billingDetails.map((bill, index) => {
            return (
              <Grid item xs={12} lg={4} sm={12} md={6} key={index}>
                <Card
                  sx={{ minWidth: 275 }}
                  className={`border-start  border-4 border-${bill.borderColor}`}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                      className="profile-font-style"
                    >
                      {bill.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <h6 className="profile-font-style text-dark fw-bold">{bill.desc}</h6>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      className={`profile-font-style text-${bill.textColor}`}
                    >
                      {bill.plan}
                      <ArrowForwardIcon
                        className="ms-1"
                        style={{ fontSize: "14px" }}
                      />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} xs={12} md={8} className="mt-3">
            <Card>
              <CardContent className="p-0">
                <Typography className="p-0 text-start">
                  <h6
                    className="m-0 p-3  border-bottom profile-font-style"
                    style={{
                      color: "rgb(253, 98, 98)",
                      backgroundColor: "#e7d4d4",
                    }}
                  >
                    Payment Methods
                    <button
                      className="butn profile-font-style float-end pb-1 rounded "
                      style={{ marginTop: "-6px", padding: "8px" }}
                    >
                      Add Payment Method
                    </button>
                  </h6>
                </Typography>
              </CardContent>
              <CardContent className="p-0 border-bottom border-primary-subtle">
                <Typography className="p-0 text-start d-inline-flex">
                  <img
                    className="rounded m-4"
                    src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Emblem.jpg"
                    alt="card_img"
                    style={{ height: "1.5rem", width: "2rem" }}
                  />
                  <p className="my-3 profile-font-style" style={{ fontSize: "0.9rem" }}>
                    Visa ending in 1234
                    <div
                      className="profile-font-style text-secondary"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Expires 04/2024
                    </div>
                  </p>
                </Typography>
                <div className="float-end my-4">
                  <span
                    className="bg-primary-subtle profile-font-style rounded mx-2  p-1"
                    style={{ fontSize: "0.65rem" }}
                  >
                    Default
                  </span>
                  <span
                    className="mx-3 text-primary profile-font-style"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Edit
                  </span>
                </div>
              </CardContent>
              <CardContent className="p-0 border-bottom border-primary-subtle">
                <Typography className="p-0 text-start d-inline-flex">
                  <img
                    className="rounded m-4"
                    src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Symbol.jpg"
                    alt="card_img"
                    style={{ height: "1.5rem", width: "2rem" }}
                  />
                  <p className="my-3 profile-font-style" style={{ fontSize: "0.9rem" }}>
                    Mastercard ending in 5678
                    <div
                      className="text-secondary profile-font-style"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Expires 05/2022
                    </div>
                  </p>
                </Typography>
                <div className="float-end my-4">
                  <span className="profile-font-style mx-2  p-1" style={{ fontSize: "0.8rem" }}>
                    Make Default
                  </span>
                  <span
                    className="profile-font-style mx-3 text-primary"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Edit
                  </span>
                </div>
              </CardContent>
              <CardContent className="p-0 border-bottom border-primary-subtle">
                <Typography className="p-0 text-start d-inline-flex">
                  <img
                    className="rounded m-4"
                    src="https://tse2.mm.bing.net/th?id=OIP.iaYumwI96Gd8b0nAE7m27QHaDA&pid=Api&P=0&h=180"
                    alt="card_img"
                    style={{ height: "1.5rem", width: "2rem" }}
                  />
                  <p className="my-3 profile-font-style" style={{ fontSize: "0.9rem" }}>
                    American Express ending in 9012
                    <div
                      className="profile-font-style text-secondary"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Expires 01/2026
                    </div>
                  </p>
                </Typography>
                <div className="float-end my-4">
                  <span className="profile-font-style mx-2  p-1" style={{ fontSize: "0.8rem" }}>
                    Make Default
                  </span>
                  <span
                    className="mx-3 profile-font-style text-primary"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Edit
                  </span>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container className="mt-2">
          <Grid item lg={12} sm={12} xs={12} md={8} className="mt-3">
            <Card>
              <CardContent className="p-0">
                <Typography className="p-0 text-start">
                  <h6
                    className="m-0 p-3 border-bottom profile-font-style"
                    style={{
                      color: "rgb(253, 98, 98)",
                      backgroundColor: "#e7d4d4",
                    }}
                  >
                    Billing History
                  </h6>
                </Typography>
              </CardContent>
              <CardContent className="p-0 border-bottom border-primary-subtle">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="border-bottom">
                      <TableRow>
                        <TableCell className="fw-bold profile-font-style">
                          Transaction ID
                        </TableCell>
                        <TableCell className="fw-bold profile-font-style" align="left">
                          Date
                        </TableCell>
                        <TableCell className="fw-bold profile-font-style" align="left">
                          Amount
                        </TableCell>
                        <TableCell className="fw-bold profile-font-style" align="left">
                          Status
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="border-bottom">
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" className="profile-font-style">
                          #39201
                        </TableCell>
                        <TableCell align="left" className="profile-font-style">06/15/2021</TableCell>
                        <TableCell align="left" className="profile-font-style">$29.99</TableCell>
                        <TableCell align="left">
                          {" "}
                          <span
                            className="bg-primary-subtle profile-font-style rounded mx-2  p-1"
                            style={{ fontSize: "0.65rem" }}
                          >
                            Default
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" className="profile-font-style">
                          #39201
                        </TableCell>
                        <TableCell align="left" className="profile-font-style">06/15/2021</TableCell>
                        <TableCell align="left" className="profile-font-style">$29.99</TableCell>
                        <TableCell align="left">
                          {" "}
                          <span
                            className="bg-success text-light rounded mx-2 profile-font-style p-1"
                            style={{ fontSize: "0.65rem" }}
                          >
                          Paid
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" className="profile-font-style">
                          #39201
                        </TableCell>
                        <TableCell align="left" className="profile-font-style">06/15/2021</TableCell>
                        
                        <TableCell align="left" className="profile-font-style">$29.99</TableCell>
                        <TableCell align="left" >
                          {" "}
                          <span
                            className="bg-success profile-font-style text-light rounded mx-2  p-1"
                            style={{ fontSize: "0.65rem" }}
                          >
                          Paid
                          </span>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Billing;
