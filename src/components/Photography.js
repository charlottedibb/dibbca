import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Photography() {

  return (
    <div >
      <h2>hi i'm the Photography component</h2>
      <Link to="/">
        Back to homepage
      </Link>
    </div>
  );
}