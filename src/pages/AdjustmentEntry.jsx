import React from "react";
import "../styles/journal.css";
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Menu,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

// import { useLocation } from "react-router-dom";

const AdjustmentEntry = () =>
  // { heading, headingto }
  {
    // const location = useLocation();
    // console.log("location is", location);
    return (
      <TableContainer className="mb-3 border-0 me-3">
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-info-subtle">
              <TableCell className="border p-0 text-center fw-bold menuitem-font">
                Date
              </TableCell>
              <TableCell className="border p-0 text-center fw-bold menuitem-font">
                Journal No.
              </TableCell>
              <TableCell className="border p-0 text-center fw-bold menuitem-font">
                Invoice No.
              </TableCell>
              <TableCell className="border p-0 text-center fw-bold menuitem-font">
                Invoice Date
              </TableCell>
              <TableCell className="border p-0 text-center fw-bold menuitem-font">
                Particulars
              </TableCell>
              <TableCell className="border p-0 text-center fw-bold menuitem-font">
                Debit
              </TableCell>
              <TableCell className="border p-0 text-center fw-bold menuitem-font">
                Credit
              </TableCell>
              <TableCell className="border p-0 text-center fw-bold menuitem-font">
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
            <TableCell className="border p-0 px-2 menuitem-font">
              {/* {heading} A/c <span className='float-end'>Dr</span><p className='text-center'>To {headingto} A/c</p> */}
            </TableCell>
            <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
            <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
            <TableCell className="border p-0 px-2 menuitem-font">
              <FormControl sx={{ minWidth: 120 }} size="small">
                <Select
                  labelId="demo-select-small-label"
                  // value={selectedValue}
                  className="mb-4 pb-2 pt-2 mt-3 border border-2 menuitem-font"
                  // onChange={handleChange}
                  style={{ fontSize: "0.9rem", height: "25px" }}
                >
                  {/* {adjustmententry.map((entry, index) => { */}
                  {/* return ( */}
                  <MenuItem
                    // key={index}
                    // value={entry.value}
                    style={{ fontSize: "0.9rem" }}
                    className="menuitem-font"
                  >
                    {/* {entry.label} */}Ledger name
                  </MenuItem>

                  {/* ); */}
                  {/* })} */}
                </Select>
              </FormControl>
            </TableCell>
            <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
            <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
            <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

export default AdjustmentEntry;
