import React, { useContext } from "react";
import { IoBulbOutline } from "react-icons/io5";
import { FaTruckLoading } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Layout from "../components/layout/Layout";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Asset",
    },
  },
};

const labels = [
  "Jan 23",
  "Feb 12",
  "Mar 21",
  "Apr 12",
  "May 23",
  "Jun 23",
  "Jul 21",
];

const data = {
  labels,

  datasets: [
    {
      label: "By Months",
      data: [10, 111, 622, 12, 241, 3, 499, 334, 133, 765, 121, 32],
      borderColor: "rgb(166,203,231)",
      backgroundColor: "rgb(167,168,168)",
    },
  ],
};

const options1 = {
  plugins: {
    title: {
      display: true,
      text: "Liability",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels1 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const data1 = {
  labels: labels1,
  datasets: [
    {
      label: "Capital",
      data: labels1.map(() => Math.floor(Math.random() * 1001)),
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Debt",
      data: labels1.map(() => Math.floor(Math.random() * 1001)),
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Equity",
      data: labels1.map(() => Math.floor(Math.random() * 1001)),
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 0",
    },
  ],
};

const options2 = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  },
};
const data2 = {
  labels: labels1,
  datasets: [
    {
      label: "Dataset 1",
      data: labels1.map(() => Math.floor(Math.random() * 1001)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
      //   stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: labels1.map(() => Math.floor(Math.random() * 1001)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(75, 192, 192)",
      //   stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: labels1.map(() => Math.floor(Math.random() * 1001)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(53, 162, 235)",
      //   stack: "Stack 0",
    },
  ],
};

const data3 = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};
const Sales = () => {
 
  return (
    <Layout>
      <div className="sales">
        <div className="container-fluid  ">
          <div className="row">
            <div className="col-4">
              <div className="small_box m-2 ">
                <div
                  className="small_box_child"
                >
                  <div>
                    <h6>SELECT START MONTHS</h6>
                  </div>
                  <h5>APRIL 2024</h5>
                </div>

                <div
                  className="small_box_child"
                >
                  <div className="small_box_child1">
                    <span>
                      <IoBulbOutline />
                    </span>
                  </div>
                  <div className="small_box_child1">
                    <h2>3.9%</h2>
                    <p>Defect Rate</p>
                  </div>
                </div>
                <div
                  className="small_box_child"
                >
                  <div className="small_box_child1 graphCombo1">
                    <p>AVAILABILITY</p>
                  </div>
                  <div className="small_box_child1" id="Doughnut">
                    <Doughnut data={data3} />
                  </div>
                </div>
                <div
                  className="small_box_child"
                >
                  <div className="small_box_child1 catTruck">
                    <span>
                      <FaTruckLoading />
                    </span>
                  </div>
                  <div className="small_box_child1">
                    <h2>3.9%</h2>
                    <p>Defect Rate</p>
                  </div>
                </div>

                <div
                  className="small_box_child"
                >
                  <div className="small_box_child1 catTruck">
                    <span>
                      <CiTimer />
                    </span>
                  </div>
                  <div className="small_box_child1">
                    <h2>81.6%</h2>
                    <p>On Time Supplied</p>
                  </div>
                </div>

                <div
                  className="small_box_child"
                >
                  <div className="small_box_child1 catTruck">
                    <span>
                      <CiTimer />
                    </span>
                  </div>
                  <div className="small_box_child1">
                    <h2>43.6%</h2>
                    <p>No Impact Defects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 ">
              <div className="salesRepresent my-2">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="childGraph"
                    >
                      <Line options={options} data={data} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="childGraph"
                    >
                      <Line options={options} data={data} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div
                      className="childGraph"
                    >
                      <Bar options={options1} data={data1} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div
                      className="childGraph"
                    >
                      <Bar options={options2} data={data2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sales;
