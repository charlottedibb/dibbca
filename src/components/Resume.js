import React from "react";
import resumePDF from "../images/Charlotte_Dibb_Resume.pdf";
import { BrowserRouter as Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';

export default function Resume() {

  return (
    <div className="resume">
      <Document file={resumePDF}>
        <Page pageNumber={1} />
      </Document>
      <Link to="/" className="resume">Back to homepage</Link>
    </div>
  );
}
