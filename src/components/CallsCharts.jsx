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
  { name: "Joe", Calls: 703, AllFeedBack: 201 },
  { name: "Marco", Calls: 657, AllFeedBack: 193 },
  { name: "Noah", Calls: 354, AllFeedBack: 113 },
  { name: "Kelly", Calls: 751, AllFeedBack: 3908 },
  { name: "John", Calls: 1890, AllFeedBack: 4800 },
  { name: "Ken", Calls: 334, AllFeedBack: 109 },
  { name: "Una", Calls: 234, AllFeedBack: 221 },
  { name: "Gordon", Calls: 973, AllFeedBack: 447 },
  { name: "Mich", Calls: 683, AllFeedBack: 315 },
  { name: "Patrick", Calls: 736, AllFeedBack: 212 },
];

const CallsCharts = () => {
  return (
    <ComposedChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#D9DB62" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="Calls" fill="#8884d8" />
      <Line yAxisId="right" dataKey="AllFeedBack" stroke="#D9DB62" />
    </ComposedChart>
  );
};

export default CallsCharts;
