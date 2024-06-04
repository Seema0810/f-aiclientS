import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Mich", salesUK: 37, salesPH: 4.36 },
  { name: "John", salesUK: 59, salesPH: 8.79 },
  { name: "Gordon", salesUK: 58, salesPH: 7.79 },
  { name: "Marco", salesUK: 43, salesPH: 6.57 },
  { name: "Una", salesUK: 42, salesPH: 4.67 },
  { name: "Patrick", salesUK: 40, salesPH: 5.75 },
  { name: "Joe", salesUK: 38, salesPH: 5.54 },
  { name: "kelly", salesUK: 36, salesPH: 4.79 },
  { name: "Ken", salesUK: 23, salesPH: 2.56 },
  { name: "Noah", salesUK: 19, salesPH: 2.71 },
];

const CombinedChart = () => {
  return (
    <ComposedChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#D9DB62" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="salesUK" fill="#8884d8" />
      <Line yAxisId="right" dataKey="salesPH" stroke="#D9DB62" />
    </ComposedChart>
  );
};

export default CombinedChart;
