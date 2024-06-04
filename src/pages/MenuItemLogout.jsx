import React from 'react';
import axios from "axios";
import { Menu, MenuItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LogoutIcon from '@mui/icons-material/Logout';
import configuration from "../config";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";


const MenuItemLogout = ({ anchorEl, handleClose }) => {
  const { API_BASE_URL } = configuration;
  const [cookies, setCookie] = useCookies(["token"]);
  const open = Boolean(anchorEl);
  const navigate= useNavigate();

   const handleLogout = async () => {     
     console.log("logout is clicked");
    const token = cookies.token;
    // Check if token exists
    try {
      // Make POST request to backend
      const response = await axios.get(`${API_BASE_URL}/api/user/logout`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        withCredentials: true,
      });
      // Check if request was successful
      if (response.data.success) {
        navigate("/login");
        setCookie("token", "");
        console.log("Logout Successfully");
      } else {
        console.error("logout  failed:", response.data.message);
      }

      console.log(cookies);
      cookies.token ? setCookie("token", "") : navigate("/login");
    } catch (error) {
      // Handle network error
      console.error("Error:", error.message);
    }
  };

  return (
    <>
     <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className="ms-2 mt-3"
      > <MenuItem onClick={handleClose} className='menu-font border-bottom fw-bold'><SupervisorAccountIcon className='me-2' style={{color:"#216ba5"}}/>SuperAdmin</MenuItem> 
        <MenuItem onClick={handleClose} className='menu-font border-bottom'><PersonIcon className='me-2' style={{color:"#f91111c2"}}/>My Profile</MenuItem>
        <MenuItem onClick={handleClose} className='menu-font border-bottom'><ManageAccountsIcon className='me-2' style={{color:"#f91111c2"}}/>My account</MenuItem>
        <MenuItem onClick={handleLogout} className='menu-font '><LogoutIcon className='me-2' style={{color:"#f91111c2"}}/>Logout</MenuItem>
        
      </Menu>
    </>
  )
}

export default MenuItemLogout