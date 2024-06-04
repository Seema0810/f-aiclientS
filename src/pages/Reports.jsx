import Layout from "../components/layout/Layout";
import React, { useState, useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../styles/statement.css";
import Checkbox from "@mui/material/Checkbox";
import "react-calendar/dist/Calendar.css";
import Grid from "@mui/material/Grid";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { pink, yellow } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import axios from "axios";
import { bankdata } from "../dashboardRow";
import DatePicker from "./DatePicker";
import format from "date-fns/format";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import InputsContext from "../context/InputContext";
import RecordAdd from "./RecordAdd";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Reports = () => {
  const { drawerState, toggleDrawer } = useContext(InputsContext);

  const [bankDatas, setBankDatas] = useState(bankdata);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  // const [bankdetail, setBankDetail]= useState([]); //this one is used to store the filtered data
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2;",
    ...theme.typography.body2,
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  const handleSelect = (range) => {
    console.log("range in handleSelect", range);
    console.log(
      "startDate and endDate in handleSelect",
      range[0].startDate,
      range[0].endDate
    );

    let filteredData = bankdata.filter((bankdetail) => {
      let bankDataDate = new Date(bankdetail.date).getTime();
      console.log("bank Data date,", bankDataDate);
      console.log("start date", new Date(range[0].startDate).getTime());
      console.log("end Date", new Date(range[0].endDate).getTime());

      return (
        bankDataDate >= new Date(range[0].startDate).getTime() &&
        bankDataDate <= new Date(range[0].endDate).getTime()
      );
    });
    console.log("filtered Data is", filteredData);
    // setStartDate(range.startDate);
    // setEndDate(range.endDate)
    setBankDatas(filteredData);
  };

  return (
    <Layout>
      <h4 className="ms-4 mt-2 mb-3 heading-design">All Transactions </h4>
      <Grid item xs={5}>
        <Item
          className="float-end border rounded text-left ps-2 pb-2 me-3"
          style={{
            background: "White",
            border: "0",
            boxShadow: "none",
            width: "35vw",
            marginTop: "-2rem",
          }}
        >
          <div className="d-flex p-2">
            <span className="report-amount fw-bold text-dark">
              Name:<span className="text-secondary"> AAANS Services</span>
            </span>
            <span className="report-amount ms-4 fw-bold text-dark">
              Address:<span className="text-secondary"> xyz location</span>
            </span>
            <span className="report-amount ms-4 fw-bold text-dark">
              A/C Type:<span className="text-secondary">  CAA</span>
            </span>
          </div>
          <div className="d-flex">
            <span className="report-amount ms-2 fw-bold text-dark">
              CUST ID:<span className="text-secondary">16668646</span>
            </span>
            <span className="report-amount ms-5 fw-bold text-dark">A/C No: <span className="text-secondary">742702588635</span></span>
          </div>
          <div className="d-flex py-2">
          <span className="report-amount ms-2 fw-bold text-dark">
            IFSC Code:<span className="text-secondary"> ICIC000567</span>
          </span>
          <span className="report-amount ms-4 fw-bold text-dark">
            Transaction Period:<span className="text-secondary"> 31/03/2023-30/03/2024</span>
          </span></div>
          <span className="report-amount ms-2 fw-bold text-dark">
            Statement Request/Download Date:<span className="text-secondary"> 03/04/2024</span>
          </span>
          <h6 className="fw-bold mt-2 ms-2" style={{color:"red"}}>Advanced Search</h6>
          <div className="d-flex py-2">
          <span className="report-amount ms-2 fw-bold text-dark">Amount From:<span className="text-secondary"> NA To NA </span> </span>
          <span className="float-end report-amount ms-5 fw-bold text-dark">
            Cheque No. From:<span className="text-secondary"> NA To NA</span> 
          </span>
          </div>
          <span className="report-amount ms-2 fw-bold text-dark">
            Transaction Type:<span className="text-secondary"> DC</span>
          </span>
        </Item>
      </Grid>
      <Grid container spacing={0} className="ms-2 position-absolute">
        <Grid item xs={7} className="d-flex flex-row">
          <Item className="border border-0 rounded-0">
            <select
              id="bulkactions"
              name="bulkactions"
              className="bg-light  dateStyle range-design"
              style={{ width: "15vw", height: "4.5vh", borderRadius: "3px" }}
            >
              <option value="vendor">Bulk actions</option>
            </select>
            <p className="ms-2 para-font">
              Click on each transaction and categorize them to your accounting
              ledger.
            </p>
          </Item>
          <div className="ms-3 mt-3">
            <span className="report-amount">Selected Amount:</span>
            <span className="report-amount mx-4 fw-bold text-dark">
              $.00<span className="fw-medium">(0 Clear)</span>
            </span>
          </div>
        </Grid>
      </Grid>
      <div className="d-flex" style={{ marginTop: "12rem" }}>
        {/* <Checkbox defaultChecked className="p-0 ps-3 " />{" "} */}
        <ArrowDropDownSharpIcon className="me-2 mt-2" />
        <DatePicker handleSelect={handleSelect} />
        <select
          id="vendor"
          name="vendor"
          className="bg-light mx-2 mt-2 dateStyle range-design"
          style={{ width: "15vw", height: "4.5vh", borderRadius: "3px" }}
        >
          <option value="vendor">vendor</option>
        </select>
        <div
          className="bg-light ps-2 mt-2 pt-1 range-design"
          style={{ width: "15vw", height: "4.5vh", borderRadius: "3px" }}
        >
          Description
        </div>
        <select
          id="Account"
          name="account"
          className="dateStyle ms-2 mt-2 bg-light range-design"
          style={{ width: "15vw", height: "4.5vh", borderRadius: "3px" }}
        >
          <option value="account">Account</option>
        </select>
        <select
          id="amount"
          name="amount"
          className="dateStyle ms-2 mt-2 bg-light range-design"
          style={{ width: "15vw", height: "4.5vh", borderRadius: "3px" }}
        >
          <option value="amount">Amount</option>
        </select>
        <select
          id="all"
          name="all"
          className="dateStyle mx-2 mt-2 bg-light range-design"
          style={{ width: "15vw", height: "4.5vh", borderRadius: "3px" }}
        >
          <option value="account">All</option>
        </select>
      </div>
      <TableContainer className="w-100">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead style={{ backgroundColor: "lightgrey" }}>
            <TableRow className="">
              <TableCell
                className="ps-2 lh-1 p-0 date-design"
                style={{ fontSize: "smaller", fontWeight: "bold" }}
              >
                Sr No.
              </TableCell>
              <TableCell
                className="ps-2 lh-1 p-0 date-design"
                style={{ fontSize: "smaller", fontWeight: "bold" }}
              >
                Tran Id
              </TableCell>
              <TableCell
                // // style={{ fontSize: "smaller", fontWeight: "bold" }}
                // onClick={() => setShowCalender(!showCalender)}
                className="date-design p-0 ps-2"
              >
                Value Date <ArrowDropDownSharpIcon className="" />
                {/* {console.log("date is", date)} */}
              </TableCell>
              <TableCell
                // // style={{ fontSize: "smaller", fontWeight: "bold" }}
                // onClick={() => setShowCalender(!showCalender)}
                className="date-design p-0"
              >
                Transaction Date <ArrowDropDownSharpIcon className="" />
                {/* {console.log("date is", date)} */}
              </TableCell>
              <TableCell
                className="lh-1 p-0 date-design"
                style={{ fontSize: "smaller", fontWeight: "bold" }}
              >
                Cheque No.
              </TableCell>
              <TableCell
                className="lh-1 p-0 date-design"
                style={{ fontSize: "smaller", fontWeight: "bold" }}
              >
                Transaction Remarks
              </TableCell>
              <TableCell
                className="p-0 lh-1 date-design"
                style={{ fontSize: "smaller", fontWeight: "bold" }}
              >
                Withdrawl(Dr)
              </TableCell>
              <TableCell
                className="p-0 lh-1 date-design"
                style={{ fontSize: "smaller", fontWeight: "bold" }}
              >
                Deposit(Cr)
              </TableCell>
              <TableCell className="lh-1 p-0 date-design">Balance</TableCell>
              <TableCell className="lh-1 p-0 date-design">In/Out</TableCell>
              <TableCell className="p-0 lh-1"></TableCell>
            </TableRow>
            {/* {showCalender && (
              <Calendar
                onChange={handleDateChange}
                value={date}
                //  className="react-calender"
              />
            )} */}
          </TableHead>
          <TableBody>
            {bankDatas.map((bankinfo, index) => {
              return (
                <>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell
                      className="report-data-design  text-start p-0"
                      component="th"
                      scope="row"
                    >
                      {/* <Checkbox defaultChecked /> */}
                      {format(bankinfo.date, "yyyy-MM-dd")}
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell className="report-data-design  text-center p-0">
                      {bankinfo.vendor}
                    </TableCell>
                    <TableCell className="report-data-design  text-center p-0">
                      {bankinfo.description}
                    </TableCell>
                    <TableCell className="report-data-design  fs-6 text-center p-0">
                      {bankinfo.account}
                    </TableCell>
                    <TableCell className="report-data-design  fs-6 text-center p-0">
                      {bankinfo.amount}
                    </TableCell>
                    <TableCell className="report-data-design  fs-6 text-center p-0"></TableCell>
                    <TableCell className="report-data-design  fs-6 text-center p-0">
                      {bankinfo.in_out === "credit" ? (
                        <ArrowCircleDownIcon className="text-success mx-2" />
                      ) : (
                        <ArrowCircleUpIcon className="text-danger mx-2" />
                      )}
                    </TableCell>
                    <TableCell className="text-center p-0">
                      <Button onClick={toggleDrawer("right", true)}>Map</Button>

                      {/* <TaskOutlinedIcon /> */}
                      <ChatBubbleOutlineOutlinedIcon className="me-2" />
                      <Radio
                        onChange={handleChange}
                        className="p-0"
                        value="pink"
                        checked={selectedValue === "pink"}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                      />
                      <Radio
                        onChange={handleChange}
                        className="p-0 mx-1"
                        checked={selectedValue === "yellow"}
                        value="yellow"
                        sx={{
                          color: yellow[800],
                          "&.Mui-checked": {
                            color: yellow[600],
                          },
                        }}
                      />
                      <Radio
                        color="success"
                        className="p-0"
                        onChange={handleChange}
                        value="success"
                        checked={selectedValue === "success"}
                      />
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        anchor="right"
        open={drawerState.right}
        onClose={toggleDrawer("right", false)}
      >
        <RecordAdd />
      </Drawer>
    </Layout>
  );
};

export default Reports;
