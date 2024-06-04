import React from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../styles/profile.css";
import {
  FormControl,
  FormControlLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { Button } from "antd";
import Checkbox from "@mui/material/Checkbox";

const Notification = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  return (
    <>
      <Grid container spacing={3} className="mx-1" style={{ width: "97%" }}>
        <Grid item lg={8} sm={12} xs={12} md={8} className="mb-5">
          <Item className="p-0 text-start">
            <div
              className="d-flex p-2 border-bottom"
              style={{ color: "rgb(253, 98, 98)", backgroundColor: "#e7d4d4" }}
            >
              <h6 className="mt-2 ms-3 profile-font-style">
                Email Notifications
              </h6>
              <span className="w-75 ">
                <PinkSwitch className="float-end " defaultChecked />
              </span>
            </div>
            <div>
              <FormControl className="form-design">
                <FormHelperText className="fs-6 ms-4 form-font-style">
                  Default notification email
                </FormHelperText>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  placeholder="name@example.com"
                  className="mb-2 ms-4 w-100 input-field-style"
                />
              </FormControl>
            </div>
            <p className="ms-4 mt-3 profile-font-style">
              Choose which types of email updates you receive{" "}
            </p>
            <div className="">
              <FormControlLabel
                className="ms-3 d-block profile-font-style"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Changes made to your account
             "
              />
              <FormControlLabel
                className="ms-3"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Changes are made to groups you're part of"
              />
              <FormControlLabel
                className="ms-3"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Product updates for products you've purchased or starred"
              />
              <FormControlLabel
                className="ms-3"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Information on new products and services"
              />
              <FormControlLabel
                className="ms-3 d-block"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Marketing and promotional offers"
              />
              <FormControlLabel
                className="ms-3"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Security alerts"
              />
            </div>
          </Item>
        </Grid>

        <Grid item lg={4} sm={12} xs={12} md={4}>
          <Item className="p-0 text-start ">
            <h6
              className="p-3 border-bottom profile-font-style"
              style={{ color: "rgb(253, 98, 98)", backgroundColor: "#e7d4d4" }}
            >
              Notification Preferences
            </h6>
            <div className="">
              <FormControlLabel
                className="ms-3"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Automatically subscribe to group notifications"
              />
              <FormControlLabel
                className="ms-3"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Automatically subscribe to new product notifications"
              />
            </div>
            <Button className="ms-4 my-3 p-1 delete-btn btn bg-danger-subtle text-danger profile-font-style">
              Unsubscribe from all notifications
            </Button>
          </Item>
        </Grid>
        <Grid item lg={8} sm={12} xs={12} md={8} className="mb-5">
          <Item className="p-0 text-start">
            <div
              className="d-flex p-2 border-bottom"
              style={{ color: "rgb(253, 98, 98)", backgroundColor: "#e7d4d4" }}
            >
              <h6 className="mt-2 ms-3 profile-font-style">
                Push Notifications
              </h6>
              <span className="w-75 ">
                <PinkSwitch className="float-end" defaultChecked />
              </span>
            </div>
            <div>
              <FormControl className="form-design">
                <FormHelperText className="fs-6 ms-4 form-font-style">
                  Default SMS number
                </FormHelperText>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  placeholder="123-456-7890"
                  className="mb-2 w-100 ms-4 input-field-style"
                />
              </FormControl>
            </div>
            <p className="ms-4 mt-3 profile-font-style">
              Choose which types of push notifications you receive{" "}
            </p>
            <div>
              <FormControlLabel
                className="ms-3 d-block"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Someone comments on your post
             "
              />
              <FormControlLabel
                className="ms-3 d-block"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Someone shares your post"
              />
              <FormControlLabel
                className="ms-3"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="A user follows your account"
              />

              <FormControlLabel
                className="ms-3 d-block"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="You receive a private message
                "
              />
              <FormControlLabel
                className="ms-3"
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Security alerts"
              />
            </div>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Notification;
