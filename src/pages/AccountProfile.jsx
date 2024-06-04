import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/layout/Layout";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import { Tabs, Tab, Box } from "@mui/material";
import Profile from "./Profile";
import Billing from "./Billing";
import Security from "./Security";
import Notification from "./Notification";
import { appsPages } from "../dashboardRow";
import "../styles/profile.css";
import { useLocation, useNavigate } from "react-router-dom";

const AccountProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();  
  const params = new URLSearchParams(location.search);  
  const selectedTab = params.get("page");
  const [value, setValue] = useState(0);
  const initialValue = selectedTab
    ? appsPages[0].apps.findIndex((app) => app.name === selectedTab)
    : 0;

  useEffect(() => {
    setValue(initialValue !== -1 && initialValue);
  }, [initialValue]); 

  const handleTabChange = (e, val) => {
    setValue(val);
    // Update the search attribute of the location with the tab value
    const selectedTabName = appsPages[0].apps[val].name;
    navigate(`?page=${selectedTabName}`);
  };

  return (
    <Layout>
      <h6 className="account-profile border-bottom bg-light shadow-lg p-2  bg-body-tertiary ">
        <PermIdentityTwoToneIcon className="m-1  fs-5" />
        Account Settings - {appsPages[0].apps[value].name}
      </h6>
      <Tabs
        value={value}
        onChange={handleTabChange}
        className="mx-3  border-bottom "
      >
        {appsPages[0].apps.map((app) => (
          <Tab key={app.id} className="tab-font w-0" label={app.name} />
        ))}
      </Tabs>
      <Box sx={{ marginTop: 2 }}>
        {value === 0 && <Profile />}
        {value === 1 && <Billing />}
        {value === 2 && <Security />}
        {value === 3 && <Notification />}
      </Box>
    </Layout>
  );
};

export default AccountProfile;
