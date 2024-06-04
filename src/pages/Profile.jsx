import React from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../styles/profile.css";
import { FormControl, Input, FormHelperText } from "@mui/material";

const Profile = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid container spacing={3} className="mx-1" style={{width:"97%"}}>
        <Grid item lg={4} sm={12} xs={12} md={4}>
          <Item className="p-0 text-start ">
            <h6
              className="p-3 profile-font-style border-bottom"
              style={{ color: "rgb(253, 98, 98)", backgroundColor: "#e7d4d4" }}
            >
              Profile Picture
            </h6>
            <div className="text-center">
              <img
                src="https://i.pinimg.com/originals/3a/4b/1f/3a4b1fd903a175fe07d2b39be73336de.png"
                className="rounded-circle "
                alt="profile pic"
                style={{ height: "10rem", width: "10rem" }}
              />
              <p className="m-2 profile-font-style">Jpeg or png no larger than 5mb</p>
              <button className="butn profile-font-style mt-2 mb-3">Upload new image</button>
            </div>
          </Item>
        </Grid>
        <Grid item lg={8} sm={12} xs={12} md={8} className="mb-5">
          <Item className="p-0 text-start">
            <h6
              className="p-3 profile-font-style border-bottom"
              style={{ color: "rgb(253, 98, 98)", backgroundColor: "#e7d4d4" }}
            >
              Account Details
            </h6>
            <div>
              <FormControl className="form-design">
                <FormHelperText className="ms-3 form-font-style">
                  Username(how your name will appear to other users on the site)
                </FormHelperText>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  placeholder="username"
                  className="mb-2 ms-3 input-field-style w-100"
                />
                <div className="d-flex mb-3 w-100">
                  <div className="w-50">
                    <FormHelperText className="ms-3 form-font-style">First name</FormHelperText>
                    <Input
                      id="first-name-input"
                      aria-describedby="first-name-helper-text"
                      
                      className="w-100 ms-3"
                    />
                  </div>
                  <div className="mx-4 w-50">
                    <FormHelperText className="form-font-style">Last name</FormHelperText>
                    <Input
                      id="last-name-input"
                      aria-describedby="last-name-helper-text"
                     
                      className="ms-2 w-100"
                    />
                  </div>
                </div>

                <div className="d-flex mb-3 w-100">
                  <div className="w-50">
                    <FormHelperText className="ms- 3 form-font-style">
                      Organization name
                    </FormHelperText>
                    <Input
                      id="first-name-input"
                      aria-describedby="first-name-helper-text"
                      className="ms-3 w-100"
                    />
                  </div>
                  <div className="mx-4 w-50">
                    <FormHelperText className="form-font-style">Location</FormHelperText>
                    <Input
                      id="last-name-input"
                      aria-describedby="last-name-helper-text"
                      className="ms-2 w-100"
                    />
                  </div>
                </div>
                <FormHelperText id="my-helper-text" className="ms-3 form-font-style">
                  Email Address
                </FormHelperText>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  placeholder="name@example.com"
                  className="mb-2 ms-3 w-100 input-field-style"
                />
                <div className="d-flex mb-3 w-100">
                  <div className=" w-50">
                    <FormHelperText className="ms-3 form-font-style">
                      Phone number
                    </FormHelperText>
                    <Input
                      id="first-name-input"
                      aria-describedby="first-name-helper-text"
                      className="ms-3 w-100"
                    />
                  </div>
                  <div className="mx-4 w-50">
                    <FormHelperText className="form-font-style">Birthday</FormHelperText>
                    <Input
                      id="last-name-input"
                      aria-describedby="last-name-helper-text"
                      className="ms-2 w-100"
                    />
                  </div>
                </div>
                <button className="butn mt-2 mb-3 ms-3 w-25 profile-font-style">Save Changes</button>
              </FormControl>
            </div>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
