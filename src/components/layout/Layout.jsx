import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
// import Subscription from "../../pages/Subscription";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <div className="container-fluid m-0 g-0 p-0">
          <div className="navbarStyle">
            <Navbar />
          </div>
          <div className="otherPage">
            <div>
              <Sidebar />
            </div>
            <div className="pages">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
