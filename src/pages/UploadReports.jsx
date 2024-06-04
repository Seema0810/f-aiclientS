import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Layout from "../components/layout/Layout";
import { uploadDocs } from "../dashboardRow";
import { useModalState } from "../hooks/useModel";
import UploadModel from "../model/UploadModel";
import { catag } from "../state/catagory";
import ListReport from "./ListReports";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import configuration from "../config";
import axios from "axios";
import DataGrid from "react-data-grid";
import "react-data-grid/lib/styles.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import { ErrorBoundary } from "../error-boundary";
import { useCookies } from "react-cookie";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const UploadReports = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [uploadName, setUploadName] = useState([]);

  const [data, setData] = useRecoilState(catag);
  const result = useRecoilValue(catag);

  const { open, handleOpen, handleClose } = useModalState(false);
  const { API_BASE_URL } = configuration;
  const [previousSessionFiles, setPreviousSessionFiles] = useState([]);
  const [currentSessionFiles, setCurrentSessionFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [cookies, setCookies] = useCookies(["token"]);
  const columns =
    (fileContent && Object.keys(fileContent[0]))?.map((key) => ({
      key: key,
      name: key,
      resizable: true,
      sortable: true,
    })) || [];

  useEffect(() => {
    if (activeMenu === 0) {
      setData((prevData) => ({
        ...prevData,
        category: "Invoices",
      }));
    } else if (activeMenu === 1) {
      setData((prevData) => ({
        ...prevData,
        category: "Bank Statement",
      }));
    } else if (activeMenu === 2) {
      setData((prevData) => ({
        ...prevData,
        category: "Other Docs",
      }));
    } else if (activeMenu === 3) {
      setData((prevData) => ({
        ...prevData,
        category: "Reports",
      }));
    }

    return () => {
      <></>;
    };
  }, [activeMenu]);

  const handleSubCategory = (inv) => {
    setData((prevData) => ({
      ...prevData,
      subcategory: inv.name,
    }));
  };

  useEffect(() => {
    const fetchPreviousSessionFilesUpload = async () => {
      setPreviousSessionFiles([]);
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/files/upload/previous`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${cookies.token}`,
            },
            withCredentials: true,
          }
        );
        const data = res.data;
        setPreviousSessionFiles(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPreviousSessionFilesUpload();
  }, []);

  useEffect(() => {
    const fetchCurrentSessionFilesUpload = async () => {
      setCurrentSessionFiles([]);
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/files/upload/current`,
          {
            withCredentials: true,
          }
        );
        const data = res.data;
        setCurrentSessionFiles(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentSessionFilesUpload();
  }, []);

  return (
    <Layout>
      <div className="container-fluid m-0 p-0 g-0">
        <div className="row m-0 p-0 g-0">
          <div className="uploadCategory">
            <div className="category1" onClick={() => setActiveMenu(0)}>
              <span></span>
              <span>Invoices</span>
            </div>
            <div className="category1" onClick={() => setActiveMenu(1)}>
              <span></span>
              <span>Bank Statement</span>
            </div>
            <div className="category1" onClick={() => setActiveMenu(2)}>
              <span></span>
              <span>Other Docs</span>
            </div>
            <div className="category1" onClick={() => setActiveMenu(3)}>
              <span></span>
              <span>Reports</span>
            </div>
          </div>
        </div>
        <div className="row m-0 p-0 g-0 ">
          <div className="uploadedList row">
            <div className="col-md-7">
              <div className="row m-0 g-0 p-0">
                <div className="uploadedNameSection row">
                  <div className="row invoicesHeading">
                    <h4>{uploadDocs[activeMenu].category}</h4>
                  </div>
                  {uploadDocs[activeMenu].subCategory?.map((inv, i) => (
                    <div className="col-md-3 parentUploadDiv m-0 p-0 g-0">
                      <div
                        className="uploadCatNames"
                        onClick={() => {
                          setUploadName(inv?.listName);
                          handleOpen();
                          handleSubCategory(inv);
                        }}
                      >
                        <span style={{ fontSize: "1rem" }}>{inv?.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {activeMenu === 1 && (
                <>
                  <Link to="/bankstatement">
                    <Button variant="text">Analysis</Button>
                  </Link>
                </>
              )}
              <ErrorBoundary>
                {file && !fileContent && (
                  // file.headers &&
                  <div style={{ maxHeight: "500px", overflow: "auto" }}>
                    <Document
                      file={file}
                      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    >
                      {Array.from(new Array(numPages), (el, index) => (
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                        />
                      ))}
                    </Document>
                  </div>
                )}
              </ErrorBoundary>
              <ErrorBoundary>
                {file &&
                  file.headers &&
                  file.headers["content-type"] ===
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
                  fileContent &&
                  console.log(fileContent)}
                {file &&
                  file.headers &&
                  file.headers["content-type"] ===
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
                  fileContent && (
                    <DataGrid
                      key={file.data.id}
                      columns={columns}
                      rows={fileContent}
                    />
                  )}
              </ErrorBoundary>
            </div>
            <div className="col-md-5">
              <div className="row m-0 g-0 p-0">
                <div className="uploadedNameSectionList ">
                  <ListReport
                    setFile={setFile}
                    previousSessionFiles={previousSessionFiles}
                    currentSessionFiles={currentSessionFiles}
                    setFileContent={setFileContent}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadModel
        open={open}
        handleClose={handleClose}
        uploadName={uploadName}
        setCurrentSessionFiles={setCurrentSessionFiles}
      />
    </Layout>
  );
};

export default UploadReports;
