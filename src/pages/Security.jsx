import React from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../styles/profile.css";
import { FormControl, Input, FormHelperText } from "@mui/material";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { Button } from "antd";

const Security = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid container spacing={3} className="mx-1" style={{ width: "97%" }}>
        <Grid item lg={8} sm={12} xs={12} md={8} className="mb-5">
          <Item className="p-0 text-start">
            <h6
              className="p-3 border-bottom profile-font-style"
              style={{ color: "rgb(253, 98, 98)", backgroundColor: "#e7d4d4" }}
            >
              Change Password
            </h6>
            <div className="text-center">
              <FormControl className="form-design">
                <FormHelperText className="fs-6 form-font-style">
                  Current Password
                </FormHelperText>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  placeholder="Enter current password"
                  className="mb-2 w-100 ms-1 input-field-style"
                />
                <div className=" mb-3 w-100">
                  <div className="w-100 mt-2">
                    <FormHelperText className="fs-6 form-font-style">
                      New password
                    </FormHelperText>
                    <Input
                      id="first-name-input"
                      aria-describedby="first-name-helper-text"
                      placeholder="Enter new password "
                      className="w-100 ms-1 input-field-style"
                    />
                  </div>
                  <div className="w-100 mt-3">
                    <FormHelperText className="fs-6 form-font-style">
                      Confirm Password
                    </FormHelperText>
                    <Input
                      id="last-name-input"
                      aria-describedby="last-name-helper-text"
                      placeholder="Confirm new password"
                      className=" w-100 ms-1 input-field-style"
                    />
                  </div>
                </div>

                <button className="butn mt-2 mb-3 ms-1 w-25 profile-font-style">
                  Save{" "}
                </button>
              </FormControl>
            </div>
          </Item>
        </Grid>
        <Grid item lg={4} sm={12} xs={12} md={4}>
          <Item className="p-0 text-start ">
            <h6
              className="p-3 border-bottom profile-font-style"
              style={{ color: "rgb(253, 98, 98)", backgroundColor: "#e7d4d4" }}
            >
              Two-Factor Authentication
            </h6>
            <div className="">
              <p className="mx-3 mt-3 text-start profile-font-style">
                Add another level of security to your account by enabling
                two-factor authentication. We will send you a text message to
                verify your login attempts on unrecognized devices and browsers.
              </p>
              <FormControl className="text-center mx-3">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="on"
                  name="radio-buttons-group"
                  className="justify-content-center"
                >
                  <FormControlLabel value="On" control={<Radio />} label="On" />
                  <FormControlLabel
                    value="Off"
                    control={<Radio />}
                    label="Off"
                  />
                </RadioGroup>
              </FormControl>
              <div className="w-100 mt-3">
                <FormHelperText className="fs-6 ms-3 profile-font-style">
                  SMS number
                </FormHelperText>
                <Input
                  id="last-name-input"
                  aria-describedby="last-name-helper-text"
                  placeholder="555-123-4567"
                  className=" mx-3 mb-4 profile-font-style"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item lg={8} sm={12} xs={12} md={8} className="mb-5">
          <Item className="p-0 text-start">
            <h6
              className="p-3 border-bottom profile-font-style"
              style={{ color: "rgb(253, 98, 98)", backgroundColor: "#e7d4d4" }}
            >
              Security Preferences
            </h6>
            <div className="ms-3 profile-font-style">
              <h6>Account Privacy</h6>
              <p>
                By setting your account to private, your profile information and
                posts will not be visible to users outside of your user groups.
              </p>
              <FormControl className="text-center mx-3">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Public "
                  name="radio-buttons-group"
                  className="justify-content-center"
                >
                  <FormControlLabel
                    value="Public "
                    control={<Radio />}
                    label="Public (posts are available to all users)"
                  />
                  <FormControlLabel
                    value="Private"
                    control={<Radio />}
                    label="Private (posts are available to only users in your groups)"
                  />
                </RadioGroup>
              </FormControl>
              <hr />
              <h6>Data Sharing</h6>
              <p>
                Sharing usage data can help us to improve our products and
                better serve our users as they navigation through our
                application. When you agree to share usage data with us, crash
                reports and usage analytics will be automatically sent to our
                development team for investigation.
              </p>
              <FormControl className="text-center mx-3 mb-2">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Public "
                  name="radio-buttons-group"
                  className="justify-content-center"
                >
                  <FormControlLabel
                    value="Public "
                    control={<Radio />}
                    label="Yes, share data and crash reports with app developers"
                  />
                  <FormControlLabel
                    value="Private"
                    control={<Radio />}
                    label="No, limit my data sharing with app developers"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Item>
        </Grid>
        <Grid item lg={4} sm={12} xs={12} md={4}>
          <Item className="p-0 text-start ">
            <h6
              className="p-3 border-bottom profile-font-style"
              style={{ color: "rgb(253, 98, 98)", backgroundColor: "#e7d4d4" }}
            >
              Delete Account
            </h6>
            <div className="text-center profile-font-style">
              <p className="mx-3 mt-3 text-start">
                Deleting your account is a permanent action and cannot be
                undone. If you are sure you want to delete your account, select
                the button below.s.
              </p>
              <Button className=" m-3 p-1 delete-btn btn bg-danger-subtle text-danger">
                I understand, delete my account
              </Button>
            </div>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Security;
