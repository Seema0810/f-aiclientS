import React from "react";
import "../styles/journal.css";
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow 
} from "@mui/material";

const Journalentry = ({ heading, headingto }) => {
  return (
    <TableContainer className="mb-3 border-0 me-3">
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-info-subtle">
            <TableCell className="border p-0 text-center fw-bold menuitem-font">
              Date
            </TableCell>
            <TableCell className="border p-0 text-center fw-bold menuitem-font">
              Particulars
            </TableCell>
            <TableCell className="border p-0 text-center fw-bold menuitem-font">
              LF
            </TableCell>
            <TableCell className="border p-0 text-center fw-bold menuitem-font">
              Amount(Dr.)
            </TableCell>
            <TableCell className="border p-0 text-center fw-bold menuitem-font">
              Amount(Cr.)
            </TableCell>
            <TableCell className="border p-0 text-center fw-bold menuitem-font">
              Description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
          <TableCell className="border p-0 px-2 menuitem-font">
            {heading} A/c <span className="float-end">Dr</span>
            <p className="text-center">To {headingto} A/c</p>
          </TableCell>
          <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
          <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
          <TableCell className="border p-0 px-2 menuitem-font"> </TableCell>
          <TableCell className="border p-0 px-2 menuitem-font"></TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Journalentry;
