import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);
  const [certHash, setCertHash] = useState(null);
  const [studentWalletAddress, setStudentWalletAddress] = useState(null);
  const [studentName, setStudentName] = useState(null);

  function handleUpload() {
    return alert("Uploaded");
  }

  useEffect(() => {
    if (file) {
      // upload and return the hash
      // setCertHash()
    }
  }, [file]);

  return (
    <div className="upload">
      <div className="upload-container">
        <div className="upload-heading">
          <h1>
            Create paperless <span>digital certificate</span> with Blockchain
          </h1>
        </div>
        <div className="upload-file">
          <input
            type="file"
            name="certificate"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <div className="upload-receipient">
          <h2>Student Name</h2>
          <div className="upload-receipient-input">
            <input
              type="text"
              onChange={(e) => {
                setStudentName(e.target.value);
              }}
            />
          </div>
          <h2>Student Wallet Address</h2>
          <div className="upload-receipient-input">
            <input
              type="text"
              onChange={(e) => {
                setStudentWalletAddress(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="upload-infos">
          <div className="upload-info">
            <div className="upload-info-left">
              <h3>Issuer</h3>
              <h3>Receipient</h3>
              <h3>Certificate Hash</h3>
            </div>
            <div className="upload-info-right">
              <h3>sdlfksl303ld09v93jrlfsdfsfsdfsdfsdfsj39j9j</h3>
              <h3>sdlfksl303ld09v93dsfdsdfdfdfdfdfdddsfsfsfefadsjrlj39j9j</h3>
              <h3>sdlfksl303ld09v93jrlj39j9j</h3>
            </div>
          </div>
        </div>

        <div className="upload-button">
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
