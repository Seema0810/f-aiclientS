import React, { useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import { FormHelperText, FormControl, Select, MenuItem } from "@mui/material";
import { Box, Drawer, Divider, Button } from "@mui/material";
import "../styles/recordadd.css";
import TextField from "@mui/material/TextField";
import InputsContext from "../context/InputContext";

const RecordAdd = () => {
  const { drawerState, toggleDrawer } = useContext(InputsContext);
  const [partyType, setPartyType] = useState("");

  const handleChange = (event) => {
    setPartyType(event.target.value);
  };

 
  const preventPropagation = (event) => {
    event.stopPropagation();
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h6 className="mx-3 mt-2 fw-bold h-color">RECORD TRANSACTION</h6>
      <p className="mx-3 p-font" style={{ fontSize: "small" }}>
        Exclusive optimizing neural-net
      </p>
      <Divider className="bg-warning" />
      <FormControl
        sx={{ mx: 2, mt: 1, minWidth: 200 }}
        size="small"
        onClick={preventPropagation}
        onKeyDown={preventPropagation}
      >
        <FormHelperText className="m-0 fw-bold p-font">Party Type:</FormHelperText>

        <Select
          value={partyType}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className="pe-0 ps-3 p-font text-secondary"
          style={{ fontSize: "small" }}
        >
          {" "}
          <MenuItem className="menuitem-design p-font " value="">
            Select Party type
          </MenuItem>
          <MenuItem className="menuitem-design p-font" value={10}>
            Ten
          </MenuItem>
          <MenuItem className="menuitem-design p-font" value={20}>
            Twenty
          </MenuItem>
          <MenuItem className="menuitem-design p-font" value={30}>
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
      <FormHelperText className="mx-3 fw-bold mt-2  p-font">Party Name:</FormHelperText>
      <TextField
        color="warning"
        focused
        className="mx-3  p-font text-party"
        multiline
        minRows={1}
        onClick={preventPropagation}
        onKeyDown={preventPropagation}
        sx={{
          '& .MuiInputBase-root': {
            padding: 0,           
          }
        }}
      />
      <FormControl
        sx={{ mx: 2, mt: 3, minWidth: 200 }}
        size="small"
        onClick={preventPropagation}
        onKeyDown={preventPropagation}
      >
        <FormHelperText className="m-0 fw-bold p-font">
          Transaction type(optional):
        </FormHelperText>

        <Select
          value={partyType}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className="pe-0 ps-3 text-secondary p-font"
          style={{ fontSize: "small" }}
        >
          {" "}
          <MenuItem className="menuitem-design p-font" value="">
            Select Transaction type
          </MenuItem>
          <MenuItem className="menuitem-design p-font" value={10}>
            Ten
          </MenuItem>
          <MenuItem className="menuitem-design p-font" value={20}>
            Twenty
          </MenuItem>
          <MenuItem className="menuitem-design p-font" value={30}>
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{ mx: 2, mt: 1, minWidth: 200 }}
        size="small"
        onClick={preventPropagation}
        onKeyDown={preventPropagation}
      >
        <FormHelperText className="m-0 fw-bold p-font">
          Serial Number(optional)
        </FormHelperText>

        <Select
          value={partyType}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className="pe-0 ps-3 text-secondary p-font"
          style={{ fontSize: "small" }}
        >
          {" "}
          <MenuItem className="menuitem-design p-font" value="">
            Item Selected
          </MenuItem>
          <MenuItem className="menuitem-design p-font" value={10}>
            Ten
          </MenuItem>
          <MenuItem className="menuitem-design p-font" value={20}>
            Twenty
          </MenuItem>
          <MenuItem className="menuitem-design p-font" value={30}>
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
      <FormHelperText className="mx-3 mt-2 fw-bold p-font">
        Description(optional)
      </FormHelperText>
      <TextField
        color="warning"
        focused
        className="mx-3 text-desc p-font"
        multiline
        minRows={2}
        onClick={preventPropagation}
        onKeyDown={preventPropagation}
      />
      <Divider className="my-3 bg-warning" />
      <div className="p-3">        
        <Button variant="outlined" className="me-4 record-add-btn-cancel fw-bold p-font">Cancel</Button>
        <Button variant="contained" className="record-add-btn p-font fw-bold">Submit</Button>
      </div>
    </Box>
  );
  return (
    <Layout>
      <>
        <div>
          <Button onClick={toggleDrawer("right", true)}>Right</Button>
          <Drawer
            anchor="right"
            open={drawerState.right}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </div>
      </>
    </Layout>
  );
};

export default RecordAdd;
