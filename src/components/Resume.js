import React from "react";
import resumePDF from "../images/Charlotte_Dibb_Resume.pdf";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';

export default function Resume() {

  return (
    <div>
      <Document file={resumePDF}>
        <Page pageNumber={1} />
      </Document>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
