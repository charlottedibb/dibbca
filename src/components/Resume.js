import React from "react";
import resumeImg from "../images/Resume.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Resume() {
  return (
    <div>
      <img style={{ width: "100%" }}
        src={resumeImg}
        alt="resume"
      />
      {/* <Document
        // file="/CharlotteDibbResume.pdf"
        // onLoadSuccess={this.onDocumentLoadSuccess}
      ></Document> */}
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
