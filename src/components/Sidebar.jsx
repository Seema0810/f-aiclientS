import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  dashboards,
  arrangedApps,
  appsPages,
  customisationPages,
  accoutingPages,
  caPortal
} from "../dashboardRow";
import { Link } from "react-router-dom";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StraightenIcon from '@mui/icons-material/Straighten';
import ThreePIcon from '@mui/icons-material/ThreeP';
import PolicyIcon from '@mui/icons-material/Policy';
import {
  Button,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  ToggleButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {
  MdDashboard,
  MdPages,
  MdHomeRepairService,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdBuild,
  MdPeople,
} from "react-icons/md";
import { GiSellCard } from "react-icons/gi";
import ReceiptIcon from '@mui/icons-material/Receipt';
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    borderRadius: "1rem",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleSubMenuClick = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  //handling open invoice management 
  const openInvoiceManagement = () => {
    window.open('https://invoice-xi-five.vercel.app/', '_blank');
  };
  const primary = grey[600];

  const handleLinkClick = (authitemTitle, event) => {
    console.log("authitem title pricing is cliked");
    if (authitemTitle.toLowerCase() === "pricing") {
      event.preventDefault(); // Prevent default link behavior
      window.location.href = "https://www.f-ai.in/plans-pricing"; // Redirect to external URL
    }
  };
  return (
    <div className="container-fluid m-0 g-0 p-0">
      <motion.div
        animate={{ width: showSidebar ? "14.2vw" : "4.5vw" }}
        transition={{ ease: "easeInOut", duration: 0.25 }}
        className="sidebar"
        style={{ backgroundColor: !showSidebar ? primary : "" }}
      >
        <div className="section">
          <ToggleButton
            value="center"
            aria-label="centered"
            style={{ width: "2.5rem", height: "2.5rem" }}
            onClick={handleShowSidebar}
            className=" mt-2 mb-3 rounded-circle toggle-btn"
          >
            <FormatAlignCenterIcon />
          </ToggleButton>
        </div>
        {showSidebar ? (
          <ul className="px-2">
            <li onClick={() => handleMenuClick(2)}>
              <div className="menuItemNested">
                <div className="menuItemChild dash-text">
                  <span>
                    <MdDashboard className="dash-icon" />
                  </span>

                  <AnimatePresence>
                    {showSidebar && <motion.div>Dashboard </motion.div>}
                  </AnimatePresence>
                </div>
                <div className="dropDownIcon">
                  <span>
                    {activeMenu === 2 ? (
                      <MdKeyboardArrowRight style={{ fontSize: "0.8em" }} />
                    ) : (
                      <MdKeyboardArrowDown style={{ fontSize: "0.8em" }} />
                    )}
                  </span>
                </div>
              </div>

              <ul className={`${activeMenu === 2 ? "active" : ""} mx-4`}>
                <li>
                  <Link to="/" className="link-text">
                    All
                  </Link>
                </li>
                {dashboards?.map((d, i) => (
                  <li key={i}>
                    <Link to={`/dashboard/${d?.id}`} className="link-text">
                      {d?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li onClick={() => handleMenuClick(0)}>
              <div className="menuItemNested">
                <div className="menuItemChild dash-text">
                  <span>
                    <MdPages className="dash-icon" />
                  </span>

                  <AnimatePresence>
                    {showSidebar && <motion.div>Services </motion.div>}
                  </AnimatePresence>
                </div>
                <div className="dropDownIcon">
                  <span>
                    {activeMenu === 0 ? (
                      <MdKeyboardArrowRight style={{ fontSize: "0.8em" }} />
                    ) : (
                      <MdKeyboardArrowDown style={{ fontSize: "0.8em" }} />
                    )}
                  </span>
                </div>
              </div>

              <ul className={`${activeMenu === 0 ? "active" : ""} mx-4`}>
                {arrangedApps?.map((a, i) => (
                  <li>
                    <Link to="#" className="link-text">
                      {a.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div
                className="menuItemNested"
                onClick={() => handleMenuClick(1)}
              >
                <div className="menuItemChild dash-text">
                  <span>
                    <MdHomeRepairService className="dash-icon" />
                  </span>

                  <AnimatePresence>
                    {showSidebar && <motion.div>App Pages </motion.div>}
                  </AnimatePresence>
                </div>
                <div className="dropDownIcon">
                  <span>
                    {activeMenu === 1 ? (
                      <MdKeyboardArrowRight style={{ fontSize: "0.8em" }} />
                    ) : (
                      <MdKeyboardArrowDown style={{ fontSize: "0.8em" }} />
                    )}
                  </span>
                </div>
              </div>

              <ul className={`${activeMenu === 1 ? "active" : ""} ms-4`}>
                {appsPages?.map((a, i) => (
                  <li
                    key={i}
                    onClick={() => handleSubMenuClick(i)}
                    className="m-0 p-0 g-0"
                  >
                    <div className="SubmenuItemNested">
                      <div className="SubmenuItemChild link-text">
                        {a?.apps ? (
                          <span className="link-text" style={{color:"#171111", fontWeight:"700"}} key={i}>{a?.category}</span>
                        ) : (
                          <Link className="link-text" target="_blank" key={i} to={`${a.slug!=="pricing" ? a.slug : "https://www.f-ai.in/plans-pricing" }`}                       
                          >
                            {" "}
                            {a?.category}
                          </Link>
                        )}
                      </div>
                    </div>

                    {activeSubMenu === i && (
                      <ul className="activeSub">
                        {a?.apps?.map((b, index) => (
                          <li key={index}>
                            <Link
                              to={{
                                pathname: "/accountprofile",
                                search: `?page=${b.name}`,
                              }}
                              className="link-text"
                            >
                              {b.name}
                            </Link>
                            {activeSubMenu === i && (
                              <ul className="activeSub">
                                {b?.auth?.map((authitem, index) => (
                                  <li key={index}>
                                    <Link
                                      to={{
                                        pathname: "/",
                                        search: `?page=${authitem.title}`,
                                      }}
                                      className="link-text"
                                     
                                    >
                                      {authitem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div
                className="menuItemNested"
                onClick={() => handleMenuClick(5)}
              >
                <div className="menuItemChild dash-text">
                  <span>
                    <MdHomeRepairService className="dash-icon" />
                  </span>

                  <AnimatePresence>
                    {showSidebar && <motion.div>Customisation </motion.div>}
                  </AnimatePresence>
                </div>
                <div className="dropDownIcon">
                  <span>
                    {activeMenu === 5 ? (
                      <MdKeyboardArrowRight style={{ fontSize: "0.8em" }} />
                    ) : (
                      <MdKeyboardArrowDown style={{ fontSize: "0.8em" }} />
                    )}
                  </span>
                </div>
              </div>

              <ul className={`${activeMenu === 5 ? "active" : ""} mx-4`}>
                {customisationPages.map((a, i) => (
                  <li
                    key={i}
                    onClick={() => handleSubMenuClick(i)}
                    className="m-0 p-0 g-0"
                  >
                    <div className="SubmenuItemNested">
                      <div className="SubmenuItemChild">
                        <Link to="#" className="link-text">
                          {a?.name}
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div
                className="menuItemNested"
                onClick={() => handleMenuClick(6)}
              >
                <div className="menuItemChild dash-text">
                  <span>
                    <MdHomeRepairService className="dash-icon" />
                  </span>

                  <AnimatePresence>
                    {showSidebar && <motion.div>Accounting </motion.div>}
                  </AnimatePresence>
                </div>
                <div className="dropDownIcon">
                  <span>
                    {activeMenu === 6 ? (
                      <MdKeyboardArrowRight style={{ fontSize: "0.8em" }} />
                    ) : (
                      <MdKeyboardArrowDown style={{ fontSize: "0.8em" }} />
                    )}
                  </span>
                </div>
              </div>
              {/* change  */}
              <ul className={`${activeMenu === 6 ? "active" : ""} mx-4`}>
                {accoutingPages?.map((a, i) => (
                  <li
                    key={a.id}
                    onClick={() => handleSubMenuClick(i)}
                    className="m-0 p-0 g-0"
                  >
                    <div className="SubmenuItemNested">
                      <div className="SubmenuItemChild">
                        <Link to={"/" + a.href} className="link-text">
                          {a.name}
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="menuItemChild">
                <span>
                  <GiSellCard className="dash-upload" />
                </span>
                <Link to="/upload" className="dash-text">
                  <AnimatePresence>
                    {showSidebar && <motion.div>Uploads </motion.div>}
                  </AnimatePresence>
                </Link>
              </div>
            </li>
            <li>
              <div className="menuItemChild">
                <span>
                  <ReceiptIcon className="dash-upload" />
                </span>
                <div onClick={openInvoiceManagement}  className="dash-text">
                  <AnimatePresence>
                    {showSidebar && <motion.div>Invoice Management </motion.div>}
                  </AnimatePresence>
                  
                </div>
              </div>
            </li>
            <li>
              <div className="menuItemChild">
                <span>
                  <CreditCardIcon className="dash-upload" />
                </span>
                <Link to='/invoice'  className="dash-text">
                  <AnimatePresence>
                    {showSidebar && <motion.div>Invoice </motion.div>}
                  </AnimatePresence>
                  
                </Link>
              </div>
            </li>
            <li>
              <div className="menuItemChild">
                <span>
                  <CurrencyRupeeIcon className="dash-upload" />
                </span>
                <Link to='/gst'   className="dash-text">
                  <AnimatePresence>
                    {showSidebar && <motion.div>GST </motion.div>}
                  </AnimatePresence>
                  
                </Link>
              </div>
            </li>
            <li>
              <div className="menuItemChild">
                <span>
                  <StraightenIcon className="dash-upload" />
                </span>
                <Link to='/compliance' className="dash-text">
                  <AnimatePresence>
                    {showSidebar && <motion.div>Compliance </motion.div>}
                  </AnimatePresence>
                  
                </Link>
              </div>
            </li>
            <li>
              <div
                className="menuItemNested"
                onClick={() => handleMenuClick(7)}
              >
                <div className="menuItemChild dash-text">
                  <span>
                    <ThreePIcon className="dash-icon" />
                  </span>

                  <AnimatePresence>
                    {showSidebar && <motion.div>CA Portal</motion.div>}
                  </AnimatePresence>
                </div>
                <div className="dropDownIcon">
                  <span>
                    {activeMenu === 7 ? (
                      <MdKeyboardArrowRight style={{ fontSize: "0.8em" }} />
                    ) : (
                      <MdKeyboardArrowDown style={{ fontSize: "0.8em" }} />
                    )}
                  </span>
                </div>
              </div>
              {/* change  */}
              <ul className={`${activeMenu === 7 ? "active" : ""} mx-4`}>
                {caPortal?.map((a, i) => (
                  <li
                    key={a.id}
                    onClick={() => handleSubMenuClick(i)}
                    className="m-0 p-0 g-0"
                  >
                    <div className="SubmenuItemNested">
                      <div className="SubmenuItemChild">
                        <Link to={"/" + a.href} className="link-text">
                          {a.name}
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="menuItemChild">
                <span>
                  <PolicyIcon className="dash-upload" />
                </span>
                <Link to='/legal'   className="dash-text">
                  <AnimatePresence>
                    {showSidebar && <motion.div>Legal </motion.div>}
                  </AnimatePresence>
                  
                </Link>
              </div>
            </li>
          </ul>
        ) : (
          <>
            <div className="d-flex flex-column align-items-center">
              <LightTooltip
                title={
                  <ul
                    className={activeMenu === 2 ? "active" : ""}
                    style={{
                      listStyle: "none", // Set the desired background color
                    }}
                  >
                    <li className="mt-2">
                      <Link className="tooltip-list" to="/">
                        All
                      </Link>
                    </li>
                    {dashboards?.map((d, i) => (
                      <li className="mt-2">
                        <Link
                          className="tooltip-list"
                          to={`/dashboard/${d?.id}`}
                        >
                          {d?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                }
                arrow
                placement="right-end"
              >
                <Button>
                  {" "}
                  <span>
                    <MdDashboard
                      className="fs-6 mt-1"
                      style={{ color: "rgb(191 178 178)" }}
                    />
                  </span>
                </Button>
              </LightTooltip>
              <LightTooltip
                title={
                  <>
                    <ul
                      className={activeMenu === 0 ? "active" : ""}
                      style={{ listStyle: "none" }}
                    >
                      {arrangedApps?.map((a, i) => (
                        <li key={i} className="mt-2">
                          <Link to="#" className="tooltip-list">
                            {a.category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                }
                arrow
                placement="right-end"
              >
                <Button>
                  {" "}
                  <span>
                    <MdPages
                      className="fs-6 mt-1"
                      style={{ color: "rgb(191 178 178)" }}
                    />
                  </span>
                </Button>
              </LightTooltip>
              <LightTooltip
                title={
                  <>
                    <ul
                      className={activeMenu === 1 ? "active" : ""}
                      style={{ listStyle: "none" }}
                    >
                      {appsPages?.map((a, i) => (
                        <li key={i} className="m-0 p-0 g-0">
                          <div className="SubmenuItemNested ">
                            <div className="SubmenuItemChild">
                              <Link to="#" className="tooltip-app">
                                {a?.category}
                              </Link>
                            </div>
                          </div>

                          <ul
                            className={`${
                              activeSubMenu === i ? "activeSub" : ""
                            } `}
                            style={{
                              listStyle: "none",

                              marginLeft: 0,
                            }}
                          >
                            {a?.apps?.map((b, index) => (
                              <li key={index} className="my-2">
                                <Link to="#" className="tooltip-list">
                                  {b.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </>
                }
                arrow
                placement="right-end"
              >
                <Button>
                  {" "}
                  <span>
                    <MdHomeRepairService
                      className="fs-6 mt-1"
                      style={{ color: "rgb(191 178 178)" }}
                    />
                  </span>
                </Button>
              </LightTooltip>
              <LightTooltip
                title={
                  <>
                    <Link to="/upload" className="tooltip-list">
                      Uploads
                    </Link>
                  </>
                }
                arrow
                placement="right-end"
              >
                <Button>
                  {" "}
                  <span>
                    <GiSellCard
                      className="fs-6 mt-1"
                      style={{ color: "rgb(191 178 178)" }}
                    />
                  </span>
                </Button>
              </LightTooltip>
              
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Sidebar;
