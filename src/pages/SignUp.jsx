import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import "../styles/signup.css"; // Import the CSS file
import configuration from "../config";

const Signup = () => {
  console.log(configuration)
  const [cookies, setCookie] = useCookies(["token"]);
  const { API_BASE_URL } = configuration;
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [isauth, setISAuth] = useState({
    state: false,
    email: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to backend
      const response = await axios.post(
        `${API_BASE_URL}/api/user/signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response);

      // Check if request was successful
      if (response.data.success) {
        setCookie("token", response.data.token);
        navigate("/");
        console.log("Signup successful");
      } else {
        // Signup failed, handle error response
        console.error("Signup failed:", response.data.message);
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="container-fluid">
      <div classname="row">
        <div className="col-7 position-relative">
          <img
            src="https://images.unsplash.com/photo-1504607798333-52a30db54a5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            style={{ height: "100vh", width: "100vw" }}
          />
        </div>
        <div className="col-5 position-absolute bg-dark text-secondary top-0 end-0 h-100 rounded-start">
          <div className="d-flex float-end mt-2 mx-2">
            <p className="text-design text-light mt-1">Already have an account?</p>
            <Link to="/login">
              <button className=" btn btn-sm   btn-outline-danger">Login</button>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="mt-3 p-5 w-75 mx-auto">
            <h4 className="text-center">Create an Account</h4>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="button-signup">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
