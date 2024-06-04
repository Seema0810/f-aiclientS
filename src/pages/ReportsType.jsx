import React, { useContext, useState } from "react";
import Layout from "../components/layout/Layout";
import {
  MdOutlineFileUpload,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

import { useNavigate, useParams } from "react-router-dom";
import { dashboards, appsName } from "../dashboardRow";

const ReportsType = () => {
  const navigate = useNavigate();
  const { id } = useParams();  
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  const data = dashboards.filter((d, i) => d?.id === Number(id));
  console.log(id, data);
  const handleReport = (value) => {
    navigate(`/dashboard/${id}/sales/${value}`);
  };

  return (
    <Layout>
      <div className="container-fluid p-0 g-0 m-0">
        <div className="row p-0 g-0 m-0 headingDashboard">
          <div className="dashboardheaderTop1 p-2">
            <div className=" dashboardFilterHead">
              <button
                className="btn btn-light"
                onClick={() => navigate("/upload")}
              >
                <span className="my-2">
                  <MdOutlineFileUpload fontSize={23} />
                </span>
                <span className="my-5"> Upload Files</span>
              </button>
            </div>
            <div className="widthsetForDashboard ">
              <button
                className="btn btn-light"
                onClick={() => handleMenuClick(0)}
              >
                <span className="my-2">
                  {activeMenu === 0 ? (
                    <MdKeyboardArrowRight fontSize={25} />
                  ) : (
                    <MdKeyboardArrowDown fontSize={25} />
                  )}
                </span>
                <span className="my-5">Filter</span>
              </button>
              <div
                className={`dashboardListModel ${
                  activeMenu === 0 ? "dashboardListModelVisual" : ""
                }`}
              >
                {data[0]?.reports.map((item, i) => (
                  <div className="itemList" onClick={() => handleReport(i)}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="dashboardheaderTop2 p-2 d-flex justify-content-center align-items-center">
            <div className="dashboardUserName ">
              <h3>Welcome Akash</h3>
            </div>
          </div>
        </div>
        <div className="row mt-1 p-2">
          <div className="firstHeading d-flex justify-content-between align-items-center w-100 ">
            <h5>{data[0]?.name}</h5>
            <input
              type="search"
              className="form-control w-25"
              placeholder="Report..."
            />
          </div>
        </div>
        <hr />
        {
          <div className="row p-2">
            {data[0]?.reports.map((r, i) => (
              <div
                className="col-md-3"
                onClick={() => navigate(`/dashboard/${id}/sales/${i}`)}
              >
                <div className="appsCard">
                  <img
                    src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-login-social.png"
                    alt="apps"
                  />
                  <p>{r}</p>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </Layout>
  );
};

export default ReportsType;
