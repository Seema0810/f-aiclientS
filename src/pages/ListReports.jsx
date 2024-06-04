import React, { useEffect } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import "../styles/listreport.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import configuration from "../config";
import * as XLSX from "xlsx";

function MyList({
  previousSessionFiles,
  setFile,
  currentSessionFiles,
  setFileContent,
}) {
  console.log(currentSessionFiles);
  const { API_BASE_URL } = configuration;

  const handleClick = async (id) => {
    setFile(null);
    setFileContent(null);
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/files/upload/firebase/${id}`,
        {
          withCredentials: true,
          responseType: "arraybuffer",
        }
      );

      if (!res) return;
      console.log(res);
      setFile(res);

      const data = new Blob([res.data], { type: res.headers["content-type"] });
      if (res.headers["content-type"] === "application/pdf") {
        // Handle PDF file
        const pdfUrl = URL.createObjectURL(data);
        setFile(pdfUrl);
      } else if (
        res.headers["content-type"] ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        // Handle Excel file
        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const bstr = evt.target.result;
            const workbook = XLSX.read(bstr, { type: "binary" });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Convert array of arrays to array of objects
            if (jsonData && jsonData.length > 0) {
              const headers = jsonData[0];
              const data = jsonData.slice(1);
              const dataAsObjects = data.map((row) => {
                return row.reduce((obj, cell, i) => {
                  obj[headers[i]] = cell;
                  return obj;
                }, {});
              });

              // Set the file data
              setFileContent(dataAsObjects);
            }
          } catch (error) {
            console.log(error);
            return;
          }
        };

        if (!data) return;
        reader.readAsBinaryString(data); // Start reading the Blob
      } else if (res.headers["Content-Type"] === "application/json") {
        if (!data) return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card
        style={{ backgroundColor: "black", color: "white" }}
        className="card-design mb-5"
      >
        <CardContent>
          <List
            style={{ overflowY: "scroll", height: "90px", maxHeight: "170px" }}
          >
            {" "}
            <h6 style={{ textAlign: "left" }} className=" text-sm">
              List of Current Session Documents:
            </h6>
            <ol>
              {currentSessionFiles.data &&
                currentSessionFiles?.data.length > 0 &&
                currentSessionFiles?.data.map((item, index) => (
                  <ListItem
                    key={item._id}
                    disableGutters
                    className="list-report"
                    onClick={() => handleClick(item._id)}
                    style={{ padding: "0" }}
                  >
                    <ListItemText>
                      <Typography
                        variant="body1"
                        className="list-report-text"
                        component="div"
                      >
                        <h6
                          style={{ textAlign: "left" }}
                          className="list-report-text text-sm"
                        >
                          {`${index + 1}) ${item.originalname}`}
                        </h6>
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
            </ol>
          </List>
        </CardContent>
      </Card>
      <Card
        style={{ backgroundColor: "rgb(116, 116, 116) ", color: "white" }}
        className="card-design"
      >
        <CardContent>
          <List style={{ overflowY: "scroll", maxHeight: "170px" }}>
            <h6 style={{ textAlign: "left" }}>
              List of Previous Session Documents:
            </h6>
            <ol>
              {previousSessionFiles.data &&
                previousSessionFiles?.data.length > 0 &&
                previousSessionFiles?.data.map((item, index) => (
                  <ListItem
                    key={item._id}
                    disableGutters
                    className="list-report"
                    onClick={() => handleClick(item._id)}
                  >
                    <ListItemText>
                      <Typography
                        variant="body1"
                        className="list-report-text"
                        component="div"
                      >
                        <h6
                          style={{ textAlign: "left" }}
                          className="list-report-text  text-sm"
                        >
                          {`${index + 1}) ${item.originalname}`}
                        </h6>
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              {/* <li>
             <ListItem disableGutters className="list-report">
               <ListItemText>
                 <Typography variant="body1" className="list-report-text">
                   <h6 className="list-report-text">Hr P&L report</h6>
                 </Typography>
               </ListItemText>
             </ListItem>
           </li> */}
              {/* <li>
             <ListItem
               component="a"
               href="#"
               disableGutters
               className="list-report"
             >
               <ListItemText>
                 <Typography variant="body1">
                   <h6 className="list-report-text">Hr P&L report</h6>
                 </Typography>
               </ListItemText>
             </ListItem>
           </li>
           <li>
             <ListItem
               component="a"
               href="#"
               disableGutters
               className="list-report"
             >
               <ListItemText>
                 <Typography variant="body1" className="list-report-text">
                   <h6 className="list-report-text">Hr P&L report</h6>
                 </Typography>
               </ListItemText>
             </ListItem>
           </li> */}
            </ol>
          </List>
        </CardContent>
      </Card>
    </>
  );
}

export default MyList;
