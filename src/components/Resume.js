import React from "react";
import resumePDF from "../images/Charlotte_Dibb_Resume.pdf"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <div>
      <Document
        file={resumePDF}
      >
        <Page pageNumber={1} />
      </Document>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
