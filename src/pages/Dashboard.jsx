import React, { useEffect, useState } from "react";
import { MdOutlineFileUpload, MdOutlineSort } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../components/layout/Layout";
// Import Swiper styles
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";

import { dashboards, appsName } from "../dashboardRow";

import company from "../company.json";
import { useRecoilState, useRecoilValue } from "recoil";
import { catag } from "../state/catagory";
import { AuthUser } from "../state/AuthUser";

console.log(company);
const Dashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [companyIndex, setCompanyIndex] = useState(0);
  const [countryIndex, setCountryIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [officeIndex, setOfficeIndex] = useState(0);
  const [companyShow, setCompanyShow] = useState(false);

  const [data, setData] = useRecoilState(catag);
  const authUser = useRecoilValue(AuthUser);

  useEffect(() => {
    //by default
    //by default
    if (
      companyIndex === undefined ||
      countryIndex === undefined ||
      cityIndex === undefined ||
      officeIndex === undefined
    )
      return;
    if (!company) return;
    if (
      company.companies &&
      company.companies[companyIndex] &&
      company.companies[companyIndex].countries &&
      company.companies[companyIndex].countries[countryIndex] &&
      company.companies[companyIndex].countries[countryIndex].cities &&
      company.companies[companyIndex].countries[countryIndex].cities[
        cityIndex
      ] &&
      company.companies[companyIndex].countries[countryIndex].cities[cityIndex]
        .offices &&
      company.companies[companyIndex].countries[countryIndex].cities[cityIndex]
        .offices[officeIndex]
    ) {
      const companyName = company.companies[companyIndex].name;
      const country =
        company.companies[companyIndex].countries[countryIndex].name;
      const city =
        company.companies[companyIndex].countries[countryIndex].cities[
          cityIndex
        ].name;
      const location =
        company.companies[companyIndex].countries[countryIndex].cities[
          cityIndex
        ].offices[officeIndex].name;
      setData((prevData) => ({
        ...prevData,
        companyName,
        country,
        city,
        location,
      }));
    }
  }, [countryIndex, cityIndex, officeIndex, companyIndex]);

  const handleCompanyIndex = (ci, c) => {
    setCompanyIndex(ci);
    setData((prevData) => ({
      ...prevData,
      companyName: c.name,
    }));
  };
  const handleCountryIndex = (ci, c) => {
    setCountryIndex(ci);
    setData((prevData) => ({
      ...prevData,
      country: c.name,
    }));
  };

  const handleLocation = (ci, c) => {
    setOfficeIndex(ci);
    setData((prevData) => ({
      ...prevData,
      location: c.name,
    }));
  };

  const handleCityIndex = (ci, c) => {
    setCityIndex(ci);
    setData((prevData) => ({
      ...prevData,
      city: c.name,
    }));
  };

  const handleMouseEnter = () => {
    setCompanyShow(true);
  };
  const handleMouseLeave = () => {
    setCompanyShow(false);
  };

  return (
    <Layout>
      <div style={{ overflowX: "hidden" }}>
        <div className="container-fluid p-0 g-0 m-0">
          <div className="row p-0 g-0 m-0 headingDashboard">
            <div className="dashboardheaderTop1 p-2">
              <div className="widthsetForDashboard ">
                <button
                  className="btn  btn-style"
                  // onMouseOver={() => setCompanyShow(!companyShow)}
                  onMouseEnter={handleMouseEnter}
                >
                  <span className="my-2">
                    <MdOutlineSort fontSize={23} />
                  </span>
                  <span className="my-5"> Company</span>
                </button>
                <Box>
                  <Grid
                    container
                    spacing={0}
                    className={`${companyShow ? "show" : "hidden"}`}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Grid item xs={3} className="g-0">
                      <div
                        className={`companyList ${
                          companyShow && "companyShowIng"
                        }`}
                      >
                        {company?.companies.map((c, ci) => (
                          <div
                            key={ci}
                            className={`d-flex justify-content-between  align-items-center ${
                              ci === companyIndex && "text-danger"
                            }`}
                            onClick={() => handleCompanyIndex(ci, c)}
                          >
                            <span>{c.name}</span>
                            <span>
                              <MdKeyboardArrowRight fontSize={15} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </Grid>
                    <Grid item xs={3} className="g-0">
                      <div
                        className={`CountryList ${
                          companyShow && "companyShowIng"
                        }`}
                      >
                        {company?.companies[companyIndex]?.countries?.map(
                          (c, ci) => (
                            <div
                              key={ci}
                              className={`d-flex justify-content-between align-items-center ${
                                ci === countryIndex && "text-danger"
                              }`}
                              onClick={() => handleCountryIndex(ci, c)}
                            >
                              <span>{c?.name}</span>
                              {/* <span>
                              <MdKeyboardArrowRight fontSize={15} />
                            </span> */}
                            </div>
                          )
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={3} className="g-0">
                      <div
                        className={`CityList ${
                          companyShow && "companyShowIng"
                        }`}
                      >
                        {company?.companies[companyIndex]?.countries?.[
                          countryIndex
                        ]?.cities?.map((c, ci) => (
                          <div
                            key={ci}
                            className={`d-flex justify-content-between align-items-center ${
                              ci === cityIndex && "text-danger "
                            }`}
                            onClick={() => handleCityIndex(ci, c)}
                          >
                            <span>{c.name}</span>
                            {/* <span>
                            <MdKeyboardArrowRight fontSize={15} />
                          </span> */}
                          </div>
                        ))}
                      </div>
                    </Grid>
                    <Grid item xs={3} className="g-0">
                      <div
                        className={`OfficeList ${
                          companyShow && "companyShowIng"
                        }`}
                      >
                        {company?.companies[companyIndex]?.countries?.[
                          countryIndex
                        ]?.cities[cityIndex].offices?.map((c, ci) => (
                          <div
                            key={ci}
                            className={`d-flex justify-content-between align-items-center ${
                              ci === officeIndex && "text-danger "
                            }`}
                            onClick={() => handleLocation(ci, c)}
                          >
                            <span>{c.name}</span>
                            {/* <span>
                            <MdKeyboardArrowRight fontSize={15} />
                          </span> */}
                          </div>
                        ))}
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </div>
              <div className=" dashboardFilterHead">
                <button
                  className="btn  btn-style"
                  onClick={() => navigate("/upload")}
                >
                  <span className="my-2">
                    <MdOutlineFileUpload fontSize={23} />
                  </span>
                  <span className="my-5"> Upload </span>
                </button>
              </div>
            </div>
            <div className="dashboardheaderTop2 p-2 d-flex justify-content-center align-items-center">
              <div className="dashboardUserName ">
                {" "}
                <h3>
                  {" "}
                  Welcome{" "}
                  {!authUser.loading &&
                    authUser.user &&
                    authUser.user.username}{" "}
                </h3>
              </div>
            </div>
          </div>

          {dashboards?.map((d, index) => (
            <>
              <div key={index} className="row firstHeading1 mt-1 p-2">
                <div className="dropdown-center">
                  <button
                    className="btn dropdown-toggle btn-sm btn-outline-danger btn-outline-red  border-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    key={index}
                  >
                    {d.name}
                  </button>
                  <ul className="dropdown-menu">
                    {d.reports.map((r, i) => {
                      return (
                        <Link
                          style={{
                            padding: 0,
                            margin: 0,
                            textDecoration: "none",
                          }}
                          to={`/${r.href}`}
                          key={r.id}
                        >
                          <a className="dropdown-item" href="#">
                            {r.name}
                          </a>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="row p-2">
                <div className="parentService " style={{ height: "212px" }}>
                  <Swiper
                    slidesPerView={index > 0 ? 4 : 3}
                    spaceBetween={20}
                    // freeMode={true}
                    centeredSlides={false}
                    pagination={{
                      clickable: true,
                      el: ".swiper-pagination",
                    }}
                    navigation={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                  >
                    {d?.reports.map((r, i) => (
                      <SwiperSlide
                        key={i}
                        onClick={() =>
                          navigate(`/dashboard/${d?.id}/sales/${i}`)
                        }
                        style={{
                          width: "25%", // Set the slide width
                        }}
                      >
                        <div
                          className={`innerCard ${
                            index > 0 && "innerCardSize"
                          }`}
                        >
                          <img
                            src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/account-billing.png"
                            alt="1"
                          />
                          <p>{r.name}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                  </Swiper>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="row firstHeading mt-1 p-2">
          <h3>App Pages</h3>
          <hr />

          {appsName?.map((a, i) => (
            <>
              <div key={i} className="row firstHeading mt-1 p-2">
                <h6>{a.category}</h6>
              </div>
              <div className="row p-2">
                {a?.apps?.map((r, i) => (
                  <div key={i} className="col-md-3">
                    <div className="appsCard">
                      <img
                        src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-login-social.png"
                        alt="apps"
                      />
                      <p>{r?.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
