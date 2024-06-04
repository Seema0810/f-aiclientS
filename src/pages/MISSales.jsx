import CallsCharts from "../components/CallsCharts";
import FeedbackChart from "../components/FeedBackChart";
import CombinedChart from "../components/SalesChart";
import Layout from "../components/layout/Layout";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MISSales = () => {
  return (
    <Layout>
      <div style={{ overflowX: "hidden" }}>
        <div class="d-flex gap-2 flex-column">
          <div class="d-flex mx-2">
            <RevenueTable />
            <RevenueComparisonChart />
          </div>

          <div class="d-flex mx-2">
            <DataTable />
            <FeedbackChart />
          </div>
          <div class="d-flex gap-2">
            <CombinedChart />
            <CallsCharts />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MISSales;

function createData(Salesman, Calls, Positive, Negative, ALlFeedBack) {
  return { Salesman, Calls, Positive, Negative, ALlFeedBack };
}

const rows = [
  createData("Joe", 703, 108, 93, 201),
  createData("Marco", 657, 109, 84, 193),
  createData("Kelly", 354, 66, 47, 113),
  createData("John", 1073, 253, 123, 376),
  createData("Ken", 334, 68, 41, 109),
  createData("Una", 698, 122, 99, 221),
  createData("Gordon", 973, 323, 124, 447),
  createData("Mich", 683, 235, 80, 315),
  createData("Patrick", 736, 118, 94, 212),
  createData("Noah", 354, 66, 47, 113),
];

function DataTable() {
  return (
    <div className="d-flex flex-column" style={{ color: "#8884d8" }}>
      <h4 style={{ color: "#8884d8" }}>Calls Statistics</h4>

      <TableContainer style={{ height: "300px", width: "auto" }}>
        <Table
          style={{ backgroundColor: "#8884d8" }}
          sx={{ minWidth: 200 }}
          size="small"
          aria-label="Calls Statistics"
        >
          <TableHead>
            <TableRow>
              <TableCell>Salesman </TableCell>
              <TableCell align="right">Calls</TableCell>
              <TableCell align="right">Positive</TableCell>
              <TableCell align="right">Negative</TableCell>
              <TableCell align="right">All Feedback</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Salesman}
                </TableCell>
                <TableCell align="right">{row.Calls}</TableCell>
                <TableCell align="right">{row.Positive}</TableCell>
                <TableCell align="right">{row.Negative}</TableCell>
                <TableCell align="right">{row.ALlFeedBack}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function createData2(Salesman, Revenue, RevPh, Sales, SalesPH) {
  return { Salesman, Revenue, RevPh, Sales, SalesPH };
}

const rows2 = [
  createData2("Mich", "$2,14,600", "$25,928", 37, 4.36),
  createData2("John", "$2,09,400", "$31,358", 58, 8.79),
  createData2("Gordon", "$1,96,000", "$26,358", 58, 7.79),
  createData2("Marco", "$1,46,200", "$22,343", 43, 6.57),
  createData2("Una", "$1,42,800", "$15,867", 42, 4.67),
  createData2("Pattrick", "$1,36,000", "$19,550", 40, 5.75),
  createData2("Joe", "$1,29,200", "$18,842", 38, 5.54),
  createData2("Kelly", "$1,22,400", "$16,271", 36, 4.79),
  createData2("Ken", "$78,200", "$8,678", 23, 2.56),
  createData2("Noah", "$64,600", "$9,229", 19, 2.71),
];
const data3 = rows2.map((row) => {
  return { name: row.Salesman, UK: row.Sales, PH: row.SalesPH };
});

function RevenueTable() {
  return (
    <div className="d-flex flex-column">
      <h4 style={{ color: "#8884d8" }}>Revenue Statistics</h4>
      <TableContainer style={{ height: "300px", width: "auto" }}>
        <Table
          style={{ backgroundColor: "#8884d8" }}
          sx={{ minWidth: 200 }}
          size="small"
          aria-label="Calls Statistics"
        >
          <TableHead>
            <TableRow>
              <TableCell>Salesman </TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Rev/Ph</TableCell>
              <TableCell align="right">Sales</TableCell>
              <TableCell align="right">Sales/Ph</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Salesman}
                </TableCell>
                <TableCell align="right">{row.Revenue}</TableCell>
                <TableCell align="right">{row.RevPh}</TableCell>
                <TableCell align="right">{row.Sales}</TableCell>
                <TableCell align="right">{row.SalesPH}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function RevenueComparisonChart() {
  return (
    <BarChart
      width={600}
      height={300}
      data={data3}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="UK" fill="#8884d8" />
      <Bar dataKey="PH" fill="#82ca9d" />
    </BarChart>
  );
}
