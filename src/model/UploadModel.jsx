import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import axios from "axios";
import React, { useState, useContext } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import { catag } from "../state/catagory";
import Dragger from "./Dragger";
import { FaFilePdf } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import configuration from "../config";
import InputsContext from "../context/InputContext"; // Import InputsContext
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for ToastContainer

// const { Dragger } = Upload;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "500px",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: 8,
  boxShadow: 24,
  overflowY: "scroll",
  p: 4,
};
const UploadModel = ({
  setCurrentSessionFiles,
  open,
  handleClose,
  uploadName,
}) => {
  const [cookies] = useCookies(["token"]);
  const data = useRecoilValue(catag);
    const icons = [FaFilePdf, FaFileExcel, FaGoogleDrive];
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUploading, setFileUploading] = useState(false);
  const { API_BASE_URL } = configuration;
  console.log("category data", data);
  // Use useContext to access the inputs state from InputsContext
  const { inputs } = useContext(InputsContext);
  console.log("inputs coming from dragger", inputs);
  const thumbnailUrl = inputs.null;
  console.log("thumbnailUrl", thumbnailUrl)

  const [fileType, setFileType] = useState(null);

  const handleUploadClick = async () => {
    console.log("handleUploadClick is clicked");
    // Show a toast notification
    // toast.success("Inputs Updated Successfully", {
    //   position: toast.POSITION.TOP_RIGHT,
    // });

    try {
      const requestData = {  thumbnailUrl, data };
      const res = await axios.post(`${API_BASE_URL}/api/files/upload`, requestData ,{
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cookies.token}`,
        },
        withCredentials: true,
      });
      console.log(res, "res from upload");
      //if form upload is true
      if (res.data.success) {
        // setCurrentSessionFiles((prev) => [...prev, res.data]);
        setCurrentSessionFiles((prev) => {
          return {
            data: [...prev.data, res.data.data],
            success: prev.success,
          };
        });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setFileUploading(false);
    }
  };
  // const upload = async (file) => {
  //   if (!file) return;
  //   const formData = new FormData();
  //   const { API_BASE_URL } = configuration;
  //   formData.append("file", file);
  //   formData.append("email", "test@gmail.com");
  //   uploadToFireBase(file);
  //   for (const key in data) {
  //     const value = data[key];
  //     formData.append(key, value);
  //   }
  //   console.log(formData.entries);
  //   //         "https://f-ai-serve.up.railway.app/api/files/upload",

  //   if (fileUploading) return;
  //   setFileUploading(true);
  //   try {
  //     const res = await axios.post(
  //       `${API_BASE_URL}/api/files/upload`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${cookies.token}`,
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(res, "res from upload");

  //     //if form upload is true
  //     if (res.data.success) {
  //       // setCurrentSessionFiles((prev) => [...prev, res.data]);
  //       setCurrentSessionFiles((prev) => {
  //         return {
  //           data: [...prev.data, res.data.data],
  //           success: prev.success,
  //         };
  //       });
  //     }
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setFileUploading(false);
  //   }
  // };

  return (
    <div>
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="row py-5 d-flex flex-row justify-content-center overflow-scroll">
            {uploadName.map((d, i) => (
              <div className="col-4">
                <h5 style={{ textAlign: "center" }}>{d}</h5>
                <Dragger
                  setCurrentSessionFiles={setCurrentSessionFiles}
                  Template={icons[i]}
                  text={"Drag and drop"}
                  setSelectedFile={setSelectedFile}
                  selectedFile={selectedFile}
                />
              </div>
            ))}
          </div>
          <div style={{ width: "100%" }} className="d-flex mt-2">
            <button
              className=" btn-dragger text-white px-2 py-1 "
              disabled={fileUploading}
              style={{ opacity: fileUploading && "0.5", marginLeft: "auto" }}
              onClick={handleUploadClick}
            >
              {fileUploading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UploadModel;
