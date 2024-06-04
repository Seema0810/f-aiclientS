import React, { useState } from "react";
import "../styles/journal.css";
import Layout from "../components/layout/Layout";
import DeleteIcon from "@mui/icons-material/Delete";
import { Menu, MenuItem, Select, FormControl } from "@mui/material";
import { adjustmententry } from "../dashboardRow";
import AdjustmentEntry from "./AdjustmentEntry";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchBar from "./SearchBar";
import Journalentry from "./Journalentry";

const Journal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [journalNo, setJournalNo] = useState("Automatic");
  const [manualEntryData, setManualEntryData] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [ledgerEntries, setLedgerEntries] = useState([
    { ledgerName: "", debit: "", credit: "", description: "" },
  ]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showAdjustment, setShowAdjustment] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    const entry = adjustmententry.find(
      (entry) => entry.value === event.target.value
    );
    setSelectedEntry(entry);
    // if (selectedEntry) {
    //   navigate("/adjustmententry", {
    //     state: { heading: selectedEntry.heading, headingto: selectedEntry.headingto },
    //   });
    // }
  };

  const handleAddClick = () => {
    setLedgerEntries([
      ...ledgerEntries,
      { ledgerName: "", debit: "", credit: "", description: "" },
    ]);
  };

  const handleJournalNoChange = (e) => {
    setJournalNo(e.target.value);
  };

  const handleManualEntryDataChange = (e) => {
    setManualEntryData(e.target.value);
  };

  const handleInvoiceDateChange = (e) => {
    setInvoiceDate(e.target.value);
  };

  const handleLedgerChange = (index, field, value) => {
    const newLedgerEntries = [...ledgerEntries];
    newLedgerEntries[index][field] = value;
    setLedgerEntries(newLedgerEntries);
  };

  const addLedger = () => {
    setLedgerEntries([
      ...ledgerEntries,
      { ledgerName: "", debit: "", credit: "", description: "" },
    ]);
  };

  const deleteLedger = (index) => {
    const newLedgerEntries = [...ledgerEntries];
    newLedgerEntries.splice(index, 1);
    setLedgerEntries(newLedgerEntries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (journalNo === "" || invoiceDate === "") {
      alert("Please fill in all required fields.");
      return;
    }

    for (let entry of ledgerEntries) {
      if (
        entry.ledgerName === "" ||
        entry.debit === "" ||
        entry.credit === "" ||
        entry.description === ""
      ) {
        alert("Please fill in all ledger details.");
        return;
      }
    }

    const journalNumber =
      journalNo === "Manual" ? manualEntryData || "Not Applicable" : journalNo;
    console.log({
      journalNo: journalNumber,
      invoiceDate,
      ledgerEntries,
    });

    // Form submission logic goes here
  };
  return (
    <Layout>
      <div className="container-journal ms-4 me-3 mt-2 d-flex">
        <form
          id="journal-entry-form"
          onSubmit={handleSubmit}
          className="journal-form ms-3"
        >
          <h2 className="h2-journal">Journal Posting</h2>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <Select
              labelId="demo-select-small-label"
              value={selectedValue}
              className="mb-4 pb-2 pt-2 border w-25 border-2 menuitem-font "
              onChange={handleChange}
              style={{ fontSize: "0.9rem", height: "25px" }}
            >
              {adjustmententry.map((entry, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={entry.value}
                    style={{ fontSize: "0.9rem" }}
                    className="menuitem-font"
                  >
                    {entry.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {selectedEntry && (
            <Journalentry
              heading={selectedEntry.heading}
              headingto={selectedEntry.headingto}
            />
          )}
          <div className="d-flex">
            <div className="h2-journal me-5">Journal:</div>
            <div className=" mx-auto ">
              <SearchBar/>
            </div>
          </div>

          <div className=" d-flex flex-row">
            <div className="">
              <label htmlFor="journal-no" className="journal-label">
                Journal No:
              </label>
              <select
                id="journal-no"
                value={journalNo}
                onChange={handleJournalNoChange}
                className="menuitem-font me-3"
                style={{ fontSize: "0.9rem", height: "25px" }}
              >
                <option value="Automatic" className="menuitem-font">
                  Automatic
                </option>
                <option value="Manual" className="menuitem-font">
                  Manual
                </option>
              </select>
            </div>

            {journalNo === "Manual" && (
              <div
                id="manual-entry"
                className="journal-label d-inline ms-1 me-3"
              >
                <label htmlFor="manual-entry-data">Manual Entry Data:</label>
                <input
                  type="text"
                  id="manual-entry-data"
                  value={manualEntryData}
                  onChange={handleManualEntryDataChange}
                />
              </div>
            )}
            <div className="ms-2">
              <label htmlFor="invoice-date" className="journal-label ">
                Invoice Date:
              </label>
              {/* <input                
                id="invoice-date"
                value={invoiceDate}
                onChange={handleInvoiceDateChange}
              /> */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="ms-4">
              <label htmlFor="invoice-date" className="journal-label ">
                Invoice No.:
              </label>
              <input type="text" id="invoice-no" value="" />
            </div>
          </div>
          <table className="ledger-table mt-3 border border-2">
            <thead>
              <tr className="bg-info-subtle">
                <th
                  className="p-0 px-2 text-start menuitem-font"
                  style={{ fontSize: "0.9rem" }}
                >
                  Ledger Name
                </th>
                <th
                  className="p-0 px-2 text-start menuitem-font"
                  style={{ fontSize: "0.9rem" }}
                >
                  Debit
                </th>
                <th
                  className="p-0 px-2 text-start menuitem-font"
                  style={{ fontSize: "0.9rem" }}
                >
                  Credit
                </th>
                <th
                  className="p-0 px-2 text-start menuitem-font"
                  style={{ fontSize: "0.9rem" }}
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {ledgerEntries.map((entry, index) => (
                <tr key={index}>
                  <td className="p-0 px-2 pt-2 text-start menuitem-font">
                    <FormControl sx={{ minWidth: 120 }} size="small">
                      <Select
                        labelId="demo-select-small-label"
                        // value={selectedValue}
                        className="mb-4 pb-2 pt-2 mt-3 border border-2 menuitem-font"
                        // onChange={handleChange}
                        style={{ fontSize: "0.9rem", height: "25px" }}
                      >
                        {/* {adjustmententry.map((entry, index) => { */}
                        {/* return ( */}
                        <MenuItem
                          key={index}
                          value={entry.value}
                          style={{ fontSize: "0.9rem" }}
                          className="menuitem-font"
                        >
                          {/* {entry.label} */}Ledger name
                        </MenuItem>

                        {/* ); */}
                        {/* })} */}
                      </Select>
                    </FormControl>
                  </td>
                  <td className="p-0 px-2 pt-2 text-start menuitem-font">
                    <input
                      type="number"
                      name="debit"
                      value={entry.debit}
                      onChange={(e) =>
                        handleLedgerChange(index, "debit", e.target.value)
                      }
                    />
                  </td>
                  <td className="p-0 px-2 pt-2 text-start menuitem-font">
                    <input
                      type="number"
                      name="credit"
                      value={entry.credit}
                      onChange={(e) =>
                        handleLedgerChange(index, "credit", e.target.value)
                      }
                    />
                  </td>
                  <td className="p-0 px-2 pt-2 text-start menuitem-font">
                    <input
                      className="p-0"
                      type="text"
                      name="description"
                      value={entry.description}
                      onChange={(e) =>
                        handleLedgerChange(index, "description", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
              <AddBoxIcon
                className="mt-2 fs-2 mb-2 mx-2 text-success"
                onClick={handleAddClick}
              />
            </tbody>
          </table>

          <div className="d-flex">
            <button
              type="button"
              className="add-ledger-btn me-3"
              onClick={deleteLedger}
            >
              Delete
            </button>
            <button type="button" className="add-ledger-btn me-3">
              Add
            </button>
            <button type="button" className="add-ledger-btn me-3">
              Edit
            </button>
            <button type="button" className="add-ledger-btn">
              Reset
            </button>
            <button type="button" className="ms-3 add-ledger-btn">
              Submit
            </button>
          </div>
          <hr
            className="mt-4 border border-2 border-dark"
            style={{ height: "2px" }}
          />
          {/* {selectedEntry && ( */}
          {/* {showAdjustment && ( */}
          <AdjustmentEntry
          // heading={selectedEntry.heading}
          // headingto={selectedEntry.headingto}
          />
          {/* )} */}

          {/* )} */}
        </form>
        <div className="w-50 d-flex flex-column me-3">
          <div className="text-end d-block my-2 me-4">
            <button
              className="bg-light-subtle border  py-2 journal-button"
              style={{ width: "120px" }}
            >
              Purchase
            </button>
          </div>
          <div className="text-end d-block  me-4">
            <button
              className="bg-light-subtle border   py-2 journal-button"
              style={{ width: "120px" }}
            >
              Sales
            </button>
          </div>
          <div className="text-end d-block my-2 me-4">
            <button
              className="bg-light-subtle border py-2 journal-button"
              style={{ width: "120px" }}
            >
              Income
            </button>
          </div>
          <div className="text-end d-block me-4">
            <button
              className="bg-light-subtle border   py-2 journal-button"
              style={{ width: "120px" }}
            >
              Expenses
            </button>
          </div>
          <div className="text-end d-block my-2 me-4">
            <button
              className="bg-light-subtle border  py-2 journal-button"
              style={{ width: "120px" }}
            >
              Credit
            </button>
          </div>
          <div className="text-end d-block me-4">
            <button
              className="bg-light-subtle border  py-2 journal-button"
              style={{ width: "120px" }}
            >
              Debit Note
            </button>
          </div>
          <div className="text-end d-block my-2 me-4">
            <button
              className="bg-light-subtle border  py-2 journal-button"
              style={{ width: "120px" }}
            >
              Adjustments
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Journal;
