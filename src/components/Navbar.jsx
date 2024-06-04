import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import Checkbox from "@mui/material/Checkbox";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import configuration from "../config";
import MenuItemLogout from "../pages/MenuItemLogout";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [showMenu, setShowMenu] = useState(false);
  const { API_BASE_URL } = configuration;
  const [cookies, setCookie] = useCookies(["token"]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate= useNavigate();

 
  const handleMenuItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 

  return (
    <>
      <nav className="navbar navbar-expand-lg navColor" style={{height:"50px"}}>
        <div className="container-fluid align-items-start">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div
            className="collapse navbar-collapse  d-flex justify-content-between align-items-center"
            id="navbarSupportedContent"
          > */}
            <div className="leftNav d-flex mt-md-3 mt-lg-2 mt-xl-3 fa-logo ">
              {/* <div className="leftSide">
              <span>
                <IoReorderThreeOutline fontSize={40} />
              </span>
            </div> */}
              <div className="leftSide">
                <h5 className="">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    data-bbox="20.303 25.565 159.393 148.871"
                    viewBox="20.303 25.565 159.393 148.871"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    data-type="color"
                    role="img"
                    aria-label="Homepage"
                  >
                    <defs>
                      {/* <style>#comp-kk2o699z svg [data-color="1"] {fill: #8A8A8A;}</style> */}
                    </defs>
                    <g>
                      <path
                        d="M179.398 97.035c-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0L88.06 83.006C76.12 77.633 61.196 84.2 59.107 97.035c-.299.895-.299 2.089-.299 3.283 0 .895 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283z"
                        fill="#FD6262"
                        data-color="1"
                      ></path>
                      <path
                        d="M49.556 62.112l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864.895-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.013 19.402 28.953 14.029z"
                        fill="#FD6262"
                        data-color="1"
                      ></path>
                      <path
                        d="M111.94 137.928l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864 1.194-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.896.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.836-17.014-19.402-28.953-14.029z"
                        fill="#FD6262"
                        data-color="1"
                      ></path>
                    </g>
                  </svg>
                  <span className="logoDesign ">
                    <b>f</b>-ai
                  </span>
                </h5>
              </div>
            </div>
            <div className="helloCen mt-lg-2 mt-xl-3 mt-2">
              {" "}
              <Link to="/">
                <span>Home</span>
              </Link>
              <Link to="/subscription">
                <span className="mx-2">Subscription</span>
              </Link>
            </div>

            <ul className="navbar-nav d-flex flex-row  mt-md-3 mt-lg-2 mt-xl-1 nav-list">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Checkbox
                    {...label}
                    icon={
                      <NotificationsNoneIcon
                        style={{
                          height: "0.8em",
                          width: "0.8em",
                          color: "#da9c9c",
                          marginTop: "3px",
                        }}
                      />
                    }
                    checkedIcon={
                      <NotificationsActiveIcon
                        style={{
                          height: "0.8em",
                          width: "0.8em",
                          color: "#da9c9c",
                          marginTop: "3px",
                        }}
                      />
                    }
                  />

                  {/* <span className="navMenuIcons">
                  <IoIosNotifications style={{height:"0.7em", width:"0.7em", color:"#da9c9c"}}/>
                </span> */}
                </a>
              </li>
              <li className="nav-item nav-list-item">
                <a className="nav-link" href="#">
                  <span className="navMenuIcons">
                    <Checkbox
                      {...label}
                      icon={
                        <MailOutlineIcon
                          style={{
                            height: "0.8em",
                            width: "0.8em",
                            color: "#da9c9c",
                          }}
                        />
                      }
                      checkedIcon={
                        <EmailIcon
                          style={{
                            height: "0.8em",
                            width: "0.8em",
                            color: "#da9c9c",
                          }}
                        />
                      }
                    />
                  </span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <span className="navMenuIcons">
                    <button className="logout-btn border-0" onClick={handleMenuItem}>
                      <LockIcon/>
                    </button>
                  </span>
                </a>
              </li>
            </ul>
          {/* </div> */}
        </div>
      </nav>
      <MenuItemLogout anchorEl={anchorEl} handleClose={handleClose}  />
      <div className="container-fluid cf-style"></div>
    </>
  );
};

export default Navbar;
