import axios from "axios";
import { useRecoilValue } from "recoil";
import { catag } from "../state/catagory";
import useDragAndDrop from "./useDragAndDrop";
import { useEffect, useState, useContext } from "react";
import configuration from "../config";
import * as XLSX from "xlsx";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import InputsContext from "../context/InputContext"; // Import InputsContext


const Dragger = ({ text, Template }) => {
    // Use useContext to access the inputs state from InputsContext
    const { inputs, setInputs } = useContext(InputsContext);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  
  const [fileUploading, setFileUploading] = useState(false);



  // const UploadFile = (file) => {

  //   (error) => {
  //     // Handle unsuccessful uploads
  //     // A full list of error codes is available at
  //     // https://firebase.google.com/docs/storage/web/handle-errors
  //     switch (error.code) {
  //       case "storage/unauthorized":
  //         // User doesn't have permission to access the object
  //         break;
  //       case "storage/canceled":
  //         // User canceled the upload
  //         break;

  //       // ...

  //       case "storage/unknown":
  //         // Unknown error occurred, inspect error.serverResponse
  //         break;
  //     }
  //   },
  //   () => {
  //     // Handle successful uploads on complete
  //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       console.log("File available at", downloadURL);
  //       setInputs((prev) => {
  //         return {
  //           ...prev,
  //           [fileType]: downloadURL,
  //         };
  //       });
  //     });
  //   }
  // );

  // const API_BASE_URL = configuration;
  const data = useRecoilValue(catag);
  const [fileLoadingPreview, setFileLoadingPreview] = useState(false);
  const {
    dragOver,
    setDragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  } = useDragAndDrop();

  const [fileUrl, setFileUrl] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [fileType, setFileType] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(`${API_BASE_URL}/api/upload`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fileSelect = (e) => {
    let selectedFile = e?.target?.files[0];
    console.log("file that is selected by me", selectedFile);
    setFile(selectedFile);
    
   
    if (!selectedFile) return;
    // setFileDropError("");
    // const reader = new FileReader();
    // if (
    //   selectedFile.type === "application/vnd.ms-excel" ||
    //   selectedFile.type ===
    //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    // ) {
    //   reader.onloadend = function (e) {
    //     const data = new Uint8Array(e.target.result);
    //     const workbook = XLSX.read(data, { type: "array" });

    //     //get the first worksheet
    //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    //     //convert the worksheet to json
    //     if (worksheet) {
    //       const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: false });
    //       setFileData(jsonData);
    //     }
    //   };
    //   reader.readAsArrayBuffer(selectedFile);
    // } else if (selectedFile.type === "application/pdf") {
    //   console.log(selectedFile.mimetype);
    //   const fileUrl = URL.createObjectURL(selectedFile);
    //   setFileUrl(fileUrl); //url of file to display
    //   console.log("selected file", selectedFile);
    // } else if (
    //   selectedFile.type === "application/msword" ||
    //   selectedFile.type ===
    //     "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    // ) {
    //   reader.onload = function (event) {};
    // }
    // setFileType(selectedFile.type);
    upload(selectedFile);
  };
 

  // const onDrop = (e) => {
  //   e.preventDefault();
  //   const selectedFile = e?.dataTransfer?.files[0];
  //   setFile(selectedFile);
  //   console.log("file selected in onDrop function", file);
  //   upload(file);

  //   // setDragOver(false);

  //   // const selectedFile = e?.dataTransfer?.files[0];

  //   // console.log("selected file", selectedFile);
  // };
  // useEffect(() => {
  //   file && upload(file);
  // }, [file]);
  const upload = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime()+"_" + file.name;
    console.log("fileNaem is after storage", fileName);
    const storageRef = ref(storage, "FaI/" + fileName);
    // Upload the file
    const uploadTask = uploadBytesResumable(storageRef, file);
    // upload into firebase and returning downloadUrl
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //     // Observe state change events such as progress, pause, and resume
        //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setFilePerc(Math.round(progress));

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        //     // Handle successful uploads on complete
  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setInputs((prev) => {
            const updatedInputs=
             {
              ...prev,
              [fileType]: downloadURL,
            };
            console.log("updated inputs ", updatedInputs);
            return updatedInputs;
          });
          // const payload = {
          //   fileType: fileType, // Assuming fileType is already defined in your code
          //   downloadURL: downloadURL
          // };
        });
      }       //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
       
    );
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("email", "test@gmail.com");

    // for (const key in data) {
    //   const value = data[key];
    //   formData.append(key, value);
    // }
    // console.log(formData.entries);
    // //         "https://f-ai-serve.up.railway.app/api/files/upload",

    // try {
    //   const res = await axios.post(
    //     "http://localhost:8080/api/files/upload",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Content-Type": "multipart/form-data",
    //       },
    //       withCredentials: true,
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };



  return (
    <form
      style={{ width: "100%" }}
      // onSubmit={handleSubmit}
    >
      <label
        className="drop-label mx-auto"
        htmlFor="file"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        // onDrop={onDrop}
      >
       
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <div>
            {" "}
            <Template color="orange" size={"50px"} />
          </div>
          <div> {text}</div>
          {filePerc > 0 && "uploading" + filePerc + "%"}
        </div>
      </label>
      <input
        type="file"
        name="file"
        id="file"
        onChange={fileSelect}
        className="file-input"
        accept=".pdf, .doc, .docx, .xls, .xlsx"
        multiple
      />
      {/* {fileUrl && fileType === "application/pdf" && ( */}
         {/* <div className="dragger-container"> */}
          {/* <object
             data={fileUrl}
             type="application/pdf"
             width="100%"
             height="300px"
             backgroundColor="white"
           /> */}
       {/* </div> */}
      {/* // )} */}
      {/* {fileData &&
        fileData.length > 0 &&
        (fileType === "application/vnd.ms-excel" ||
          fileType ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") && (
          <div className="dragger-container">
            <table className="table table-bordered table-sm">
              <tbody>
                <tr>
                  {Object.keys(fileData[0]).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>

                {fileData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, valueIndex) => (
                      <td key={valueIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}
       
    </form>

  );
};

export default Dragger;
