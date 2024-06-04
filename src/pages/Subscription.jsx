import React from "react";
import Layout from "../components/layout/Layout";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Box from "@mui/material/Box";
import { dashboards } from "../dashboardRow";
import "../styles/Subscription.css";

const Subscription = () => {
  // const [checked, setChecked] = useState(false);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  return (
    <>
      <Layout>
        <div className="container m-4">
          <div className="row">
            {dashboards?.map((d, index) => {
              return (
                <div className="col-4" key={index}>
                  <FormGroup className="m-3">
                    <h6>{d.name}</h6>
                    <Box
                      sx={{
                        maxHeight: "130px", // Set the desired maximum height
                        overflowY: "auto", // Enable vertical scrolling
                        "&::-webkit-scrollbar": {
                          width: "6px", // Set the width of the scrollbar
                          // marginLeft:"1rem"
                        },
                        "&::-webkit-scrollbar-track": {
                          backgroundColor: "#f1f1f1", // Set the background color of the scrollbar track
                        },
                        "&::-webkit-scrollbar-thumb": {
                          backgroundColor: "gray", // Set the color of the scrollbar thumb
                          borderRadius: "4px", // Set the border radius of the scrollbar thumb
                        },
                      }}
                    >
                      {d.reports.map((r, i) => {
                        return (
                          <FormControlLabel
                            className="Subscription"
                            style={{ marginLeft: "1rem", display: "block" }}
                            key={i}
                            control={
                              <Checkbox
                                // checked={checked}
                                // onChange={handleChange}
                                name="checkedBox"
                                color="primary"
                                className="Subscription"
                              />
                            }
                            label={r.name}
                            labelProps={{ className: "Subscription" }}
                          />
                        );
                      })}
                    </Box>
                  </FormGroup>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Subscription;
