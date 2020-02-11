import React, { useState, useEffect } from "react";
import resumePDF from "../images/Charlotte_Dibb_Resume.pdf";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

export default function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return (
    <div className="resume">
      <Document file={resumePDF}>
        <Page pageNumber={1} width={width} />
      </Document>
      <Link to="/" className="resume">
        Back to homepage
      </Link>
    </div>
  );
}
