import React, { useState } from "react";
import "../styles/ledger.css";
import Layout from "../components/layout/Layout";
const LedgerSetup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address1: "",
    eaddress: "",
    esubaddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    fetch("/submit", {
      method: "POST",
      body: data,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleReset = () => {
    setFormData({
      fname: "",
      lname: "",
      address1: "",
      eaddress: "",
      esubaddress: "",
    });
  };

  const cancelForm = () => {
    // Implement cancel form logic
  };

  const driveForm = () => {
    // Implement drive form logic
  };

  return (
    <Layout>
      <div className="testbox">
        <form id="registrationForm" className="ledger-form" onSubmit={handleSubmit}>
          <div className="banner">
            <h1 className="ledger-font 88fw-bold">XYZ Client</h1>
          </div>
          <h2 className="mt-3 ledger-font text-center">Ledger SetUp </h2>
          <div className="columns">
            <div className="item ledger-label ">
              <label htmlFor="fname" className=" d-block ledger-font">
                Ledger Name <span>*</span>
              </label>
              <input
                id="fname"
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
                className="ledger-font w-50"
              />
            </div>
            <div className="item ledger-label">
              <label htmlFor="lname" className="ledger-font">
                Group <span>*</span>
              </label>
              <input
                id="lname"
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                className="ledger-font w-50"
                required
              />
            </div>
            <div className="item ledger-label">
              <label htmlFor="address1" className="ledger-font">
                Sub Group <span>*</span>
              </label>
              <input
                id="address1"
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                required
                className="ledger-font w-50"
              />
            </div>
            <div className="item ledger-label">
              <label htmlFor="eaddress" className="ledger-font">
                Ledger <span>*</span>
              </label>
              <input
                id="eaddress"
                type="text"
                name="eaddress"
                value={formData.eaddress}
                onChange={handleChange}
                required
                className="ledger-font w-50"
              />
            </div>
            <div className="item ledger-label">
              <label htmlFor="esubaddress" className="ledger-font">                
                Sub Ledger<span>*</span>
              </label>
              <input
                id="esubaddress"
                type="text"
                name="esubaddress"
                value={formData.esubaddress}
                onChange={handleChange}
                required
                className="ledger-font w-50"
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="ledger-font btn-ledger">
              Submit
            </button>
            <button type="button" className="ledger-font btn-ledger" onClick={handleReset}>
              Reset
            </button>
            <button type="button" className="ledger-font btn-ledger" onClick={cancelForm}>
              Cancel
            </button>
            <button type="button" className="ledger-font btn-ledger" onClick={driveForm}>
              Drive Link
            </button>
          </div>
        </form>
        <div id="excelSheetContainer"></div>
      </div>
    </Layout>
  );
};

export default LedgerSetup;
