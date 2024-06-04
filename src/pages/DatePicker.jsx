import React from "react";
import { useState, useEffect, useRef } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { Button, Menu, MenuItem } from "@mui/material";
import "../styles/datepicker.css";
import { addDays } from "date-fns";

const DatePicker = ({ handleSelect }) => {
  const [isClicked, setIsClicked] = useState(false);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  //open close
  const [open, setOpen] = useState(false);
  const [showRange, setShowRange] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Separate state for input value

  // get the target element to toggle
  const refOne = useRef(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    setShowRange(false);
  };

  useEffect(() => {
    //set current date on component load
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  //hide dropdown on esc press
  const hideOnEscape = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      setShowRange(false);
      setOpen(false);
    }
  };

  //hide on outside click
  const hideOnClickOutside = (e) => {
    console.log(refOne.current);
    console.log(e.target);
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
      setShowRange(false);
    }
  };

  const handleCustomRange = () => {
    console.log("handling custom range");    
    setShowRange(!showRange);
    // setOpen(true);
   
    // setAnchorEl(!null); // Close the menu
  };

  const handleOnChange = (e) => {
    console.log("input value is is", e.target.value);
    setInputValue(e.target.value);

    // You can add further logic here if needed
  };

  // Function to update range state
  const updateRange = (newRange) => {
    console.log("new range is", newRange);
    setRange(newRange);

    // Also, update input value to reflect the change
    setInputValue(
      `${format(newRange[0].startDate, "yyyy-MM-dd")} to ${format(
        newRange[0].endDate,
        "yyyy-MM-dd"
      )}`
    );
    console.log("range is", range);
    handleSelect(newRange);
    setOpen(false); // Close the menu after the custom range is selected
    setShowRange(false); // Hide the range picker after the custom range is selected
  };

  //handling today
  const handleToday = () => {
    console.log("handle today is clicked");
    const today = format(new Date(), "yyyy-MM-dd");
    console.log("today date is", today);
    const newRange = [
      {
        startDate: today,
        endDate: today,
        key: "selection",
      },
    ];
    setInputValue(
      `${format(newRange[0].startDate, "yyyy-MM-dd")} to ${format(
        newRange[0].endDate,
        "yyyy-MM-dd"
      )}`
    );
    console.log("newRange in yesterday", newRange);
    handleSelect(newRange);
  };
  // handling yesterday
  const handleYesterday = () => {
    console.log("handle yesterday is clicked");
    // Create a new Date object for yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    // Format the date
    const formattedYesterday = format(yesterday, "yyyy-MM-dd");
    console.log("yesterday date is", formattedYesterday);

    // Create the new range object
    const newRange = [
      {
        startDate: formattedYesterday,
        endDate: formattedYesterday,
        key: "selection",
      },
    ];

    // Update the input value with the formatted date range
    setInputValue(`${formattedYesterday} to ${formattedYesterday}`);
    console.log("newRange in today", newRange);

    // Handle the selection with the new date range
    handleSelect(newRange);
  };
  //handle last 7 days
  const handleLastWeek = () => {
    console.log("handle last week is clicked");
    // Get the current date
    const today = new Date();

    // Get the date 7 days ago
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    // Format the dates
    const formattedToday = format(today, "yyyy-MM-dd");
    const formattedLastWeek = format(lastWeek, "yyyy-MM-dd");

    console.log("last week start date is", formattedLastWeek);
    console.log("today date is", formattedToday);

    // Create the new range object
    const newRange = [
      {
        startDate: formattedLastWeek,
        endDate: formattedToday,
        key: "selection",
      },
    ];

    // Update the input value with the formatted date range
    setInputValue(`${formattedLastWeek} to ${formattedToday}`);
    console.log("newRange in last week", newRange);

    // Handle the selection with the new date range
    handleSelect(newRange);
  };
  //handling last 30 days
  const handleLast30days = () => {
    console.log("handle last month is clicked");

    // Get the current date
    const today = new Date();

    // Get the date 30 days ago
    const lastMonth = new Date();
    lastMonth.setDate(today.getDate() - 30);

    // Format the dates
    const formattedToday = format(today, "yyyy-MM-dd");
    const formattedLastMonth = format(lastMonth, "yyyy-MM-dd");

    console.log("last month start date is", formattedLastMonth);
    console.log("today date is", formattedToday);

    // Create the new range object
    const newRange = [
      {
        startDate: formattedLastMonth,
        endDate: formattedToday,
        key: "selection",
      },
    ];

    // Update the input value with the formatted date range
    setInputValue(`${formattedLastMonth} to ${formattedToday}`);
    console.log("newRange in last month", newRange);

    // Handle the selection with the new date range
    handleSelect(newRange);
  };
  // handling the this month
  const handleThisMonth = () => {
    console.log("handle this month is clicked");
    // Get the current date
    const today = new Date();
    // Get the first day of the current month
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    // Format the dates
    const formattedToday = format(today, "yyyy-MM-dd");
    const formattedFirstDayOfMonth = format(firstDayOfMonth, "yyyy-MM-dd");
    console.log("first day of this month is", formattedFirstDayOfMonth);
    console.log("today date is", formattedToday);
    // Create the new range object
    const newRange = [
      {
        startDate: formattedFirstDayOfMonth,
        endDate: formattedToday,
        key: "selection",
      },
    ];
    // Update the input value with the formatted date range
    setInputValue(`${formattedFirstDayOfMonth} to ${formattedToday}`);
    console.log("newRange in this month", newRange);
    // Handle the selection with the new date range
    handleSelect(newRange);
  };
  //handling Last Month
  const handleLastMonth=()=>{
    console.log("handle last month is clicked");

    // Get the current date
    const today = new Date();
  
    // Calculate the first day of the previous month
    const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  
    // Calculate the last day of the previous month
    const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  
    // Format the dates
    const formattedFirstDayOfLastMonth = format(firstDayOfLastMonth, "yyyy-MM-dd");
    const formattedLastDayOfLastMonth = format(lastDayOfLastMonth, "yyyy-MM-dd");
  
    console.log("first day of last month is", formattedFirstDayOfLastMonth);
    console.log("last day of last month is", formattedLastDayOfLastMonth);
  
    // Create the new range object
    const newRange = [{
      startDate: formattedFirstDayOfLastMonth,
      endDate: formattedLastDayOfLastMonth,
      key: 'selection',
    }];
  
    // Update the input value with the formatted date range
    setInputValue(
      `${formattedFirstDayOfLastMonth} to ${formattedLastDayOfLastMonth}`
    );
    console.log("newRange in last month", newRange);
  
    // Handle the selection with the new date range
    handleSelect(newRange);
  }
  return (
    <>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="p-o border-0"
        sx={{
          "&:hover": isClicked
            ? {
                backgroundColor: "transparent",
                boxShadow: "none",               
              }
            : undefined,
        }}
      >
        <input
          value={inputValue}
          style={{ marginTop: "2.8px", marginRight: "9px" }}
          readOnly
          onChange={handleOnChange}
        />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="menu-item" onClick={handleToday}>
          Today
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleYesterday}>
          Yesterday
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleLastWeek}>
          Last 7 Days
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleLast30days}>
          Last 30 days
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleThisMonth}>
          This Month
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleLastMonth}>
          Last Month
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleCustomRange}>
          Custom Range
        </MenuItem>
      </Menu>
      <div ref={refOne}>
        {showRange && (
          <>
            <DateRange
              onChange={(item) => updateRange([item.selection])}
              // showSelectionPreview={true}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={range}
              direction="horizontal"
              className="z-3 position-absolute custom-date-range-picker "
            />
          </>
        )}
      </div>
    </>
  );
};

export default DatePicker;
