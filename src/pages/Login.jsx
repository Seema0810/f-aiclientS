import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// import configuration from "../config";

import styles from "../styles/login.module.css"; // Import CSS module for login styles

const Login = () => {
  console.log("Login component called");
  const API_BASE_URL = "https://spheric-rigging-422208-p9.el.r.appspot.com";
  // const API_BASE_URL= process.env.REACT_APP_API_BASE_URL
  // const { API_BASE_URL } = configuration;
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["token"]);

  console.log("API_BASE_URL", API_BASE_URL);
  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Make POST request to backend
      const response = await axios.post(
        `${API_BASE_URL}/api/user/signin`,
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
        console.log("Cookies after setting token:", cookie); // Log the updated cookies
        // ...
        navigate("/");

        console.log("Login successful");
      } else {
        // Signup failed, handle error response
        console.log(response)
        // console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className={styles.button}
          style={{ opacity: loading && "0.5" }}
        >
          Login
        </button>
      </form>
      <Link to="/signup" className={styles.signupLink}>
        Don't have an account? Sign up
      </Link>
    </div>
  );
};

export default Login;
