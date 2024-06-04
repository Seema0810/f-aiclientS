import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Grid, Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import invoice from "../images/fai-image.png";
import TextField from "@mui/material/TextField";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PrintIcon from "@mui/icons-material/Print";
import Typography from "@mui/material/Typography";

const Invoice = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
      border: "1px solid",
      borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
      fontSize: 12,

      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),

      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  const Img = styled("img")({
    margin: "5px",
    display: "block",
    width: "100%",
    height: "30vh",
    opacity:"200%"
  });

  return (
    <Layout>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} className="rounded-0 mt-4 ">
            <CloudDownloadIcon className="text-warning fs-1 mt-2 me-4 float-end" />
            <PrintIcon className="fs-1 mx-4 text-info mt-2 float-end" />
          </Grid>
          <Grid item xs={4} className="rounded-0 mx-3 pt-0">
            <Img alt="complex" src={invoice} className="" />
          </Grid>
          <Grid item xs={7} className="rounded-0 mt-3 ms-4">
            <h6 className="text-end fw-bold">AAANS Private Limited</h6>
            <p className="text-end lh-1">Sector 61, Banglore 468780-India</p>
            <p className="text-end lh-1">688786879 | aans45@gmail.com</p>
            <p className="text-end lh-1">fa-i.in</p>
            <p className="text-end lh-1">CIN: UOPK5879OPK698979GUY</p>
            <p className="text-end lh-1">PAN: AAICC39254A</p>
            <p className="text-end lh-1">GSTIN: 07gti7AAICC394A123</p>
            <p className="text-end lh-1">MSME/Udyam No: UDYAM-HR-05007920</p>
          </Grid>

          <Grid item xs={6} className="rounded-0 mt-4 mx-4">
            <h6 className="lh-1 fw-bold">Aaans Services private limited </h6>
            <div className="">
              Block A, flat 201, Sonestaa Meadows Thubarahali extended road
            </div>
            <div className="">Thubarahali Whitefield Banglore</div>
          </Grid>
          <Grid item xs={5} className="rounded-0 mt-2">
            <TableContainer className="float-end">
              <Table className="border w-75 float-end">
                <TableHead>
                  <TableRow>
                    <TableCell className="bg-primary-subtle">
                      Invoice#
                    </TableCell>
                    <TableCell>INV-000173</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-primary-subtle">
                      Invoice Date
                    </TableCell>
                    <TableCell>17/05/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-primary-subtle">Terms</TableCell>
                    <TableCell>Due On receipt</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-primary-subtle">
                      Due Date
                    </TableCell>
                    <TableCell>17/05/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-primary-subtle">
                      Startup Advisor
                    </TableCell>
                    <TableCell>Nirdosh Arora</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={11} className="mx-auto mt-4">
            <Item className="bg-light shadow-none rounded-0 p-0">
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 700 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow style={{ backgroundColor: "rgb(144 157 147)" }}>
                      <TableCell className="text-light invoice-font">
                        #
                      </TableCell>
                      <TableCell className="text-light invoice-font">
                        Item & Description
                      </TableCell>
                      <TableCell
                        className="text-light invoice-font"
                        align="right"
                      >
                        Quantity
                      </TableCell>
                      <TableCell
                        className="text-light invoice-font"
                        align="right"
                      >
                        Rate
                      </TableCell>
                      <TableCell
                        className="text-light invoice-font"
                        align="right"
                      >
                        HSN/SAC
                      </TableCell>
                      <TableCell
                        className="text-light invoice-font"
                        align="right"
                      >
                        Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="invoice-font"
                      >
                        1
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        className="invoice-font"
                      >
                        <TextField fullWidth id="fullWidth" />
                      </TableCell>
                      <TableCell align="right" className="invoice-font">
                        $20
                      </TableCell>
                      <TableCell align="right" className="invoice-font">
                        0.00
                      </TableCell>
                      <TableCell align="right" className="invoice-font">
                        $240
                      </TableCell>
                      <TableCell align="right" className="invoice-font">
                        $240
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
          <Grid item xs={4} className="ms-3 mt-5">
            <Item className="bg-transparent shadow-none rounded-0 p-0 text-start">
              <h6>UPI ID: ayupi@db</h6>
              <p className="d-block invoice-font">For IMPS, NEFT & RTGS</p>
              <span className="d-block fw-bold invoice-font">
                Account Holder Name: AAANS Private Limited
              </span>
              <span className="d-block invoice-font">
                BANK Name: ICICI Bank, Sector 27, Noida
              </span>
              <span className="d-block invoice-font">
                Account Number:534405000049
              </span>
              <span className="d-block invoice-font">IFSC:ICIC000568</span>
            </Item>
          </Grid>
          <Grid item xs={7}>
            <TableContainer  className="float-end w-50 mt-5">
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell className="fw-bold">SubTotal</TableCell>
                    <TableCell>50,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="fw-bold">Total</TableCell>
                    <TableCell>50,000.00</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={6} className="ms-2 mt-3 d-flex">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/406/024/original/vector-qr-code-illustration.jpg"
              className="h-75 w-50"
            />
            <p style={{marginTop:"5rem", fontSize:"0.8rem" }}>Scan with QR code to pay via UPI</p>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Invoice;
