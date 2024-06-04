import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Joe", positive: 108, negative: 93 },
  { name: "Marco", positive: 109, negative: 84 },
  { name: "Noah", positive: 66, negative: 47 },
  { name: "Kelly", positive: 120, negative: 95 },
  { name: "John", positive: 253, negative: 123 },
  { name: "Ken", positive: 68, negative: 41 },
  { name: "Una", positive: 122, negative: 99 },
  { name: "Gordon", positive: 323, negative: 124 },
  { name: "Mich", positive: 235, negative: 80 },
  { name: "Patrick", positive: 118, negative: 94 },
  // Add more individuals as needed
];

const FeedbackChart = () => {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
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
      <Bar dataKey="positive" stackId="a" fill="#8884d8" />
      <Bar dataKey="negative" stackId="a" fill="#D9DB62" />
    </BarChart>
  );
};

export default FeedbackChart;
