import React from "react";
import "../App.css";

const DownloadButtons = ({ downloadImage }) => {
  return (
    <div id="download-buttons">
      <div onClick={() => downloadImage("png")} className="btn downloadPngBtn">
        Download PNG
      </div>

      <div onClick={() => downloadImage("jpeg")} className="btn downloadJpgBtn">
        Download JPG
      </div>
    </div>
  );
};

export default DownloadButtons;
