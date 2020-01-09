import React from "react";
import resumeImg from "../images/Resume.png"

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
      <a href="/">Back to homepage</a>
      {/* <Link to={`${match.url}`}>Back to homepage</Link> */}
    </div>
  );
}
