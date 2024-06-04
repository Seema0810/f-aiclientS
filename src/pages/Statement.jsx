import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/statement.css";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import { pink, yellow } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

const Statement = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Layout>
      <TableContainer component={Paper} className="table-design mx-4">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead style={{ backgroundColor: "#d97e7e" }}>
            <TableRow>
              <TableCell className="cell-design">Date</TableCell>
              <TableCell className="cell-design">Reference</TableCell>
              <TableCell className="cell-design">Description</TableCell>
              <TableCell className="cell-design">Credit</TableCell>
              <TableCell className="cell-design">Debit</TableCell>
              <TableCell className="cell-design">Balance</TableCell>
              <TableCell className="cell-design">Category</TableCell>

              <TableCell className="cell-design">Invoice</TableCell>

              <TableCell className="cell-design">value</TableCell>
              <TableCell className="cell-design">Balance</TableCell>
              <TableCell className="cell-design"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="data-design" component="th" scope="row">
                mm/dd/yy
              </TableCell>
              <TableCell className="data-design">0203444</TableCell>
              <TableCell className="data-design">Branch deposit</TableCell>
              <TableCell className="data-design">20,000,00</TableCell>
              <TableCell className="data-design">830</TableCell>
              <TableCell className="data-design">10,000,00</TableCell>
              <TableCell className="data-design">
                <FormControl>
                 
                  <NativeSelect
                    variant="standard"
                    style={{ fontSize: "0.65rem" }}
                  >
                    <option value={10}>Capital</option>
                    <option value={20}>Expense</option>
                    <option value={30}>Income</option>
                    <option value={30}>Purchase</option>
                  </NativeSelect>
                </FormControl>
              </TableCell>
              <TableCell className="data-design">10,000,00</TableCell>
              <TableCell className="data-design">10,000,00</TableCell>

              <TableCell className="data-design">10,000,00</TableCell>
              <TableCell className="d-inline-flex data-design">
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
                  className="p-0"
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
          </TableBody>
        </Table>
      </TableContainer>
      <hr className="verticle-hr" />
    </Layout>
  );
};

export default Statement;
