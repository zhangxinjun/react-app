import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"

import App from "./components/demo";

const name = { name: '数时', age: 19 }
ReactDOM.render((
  <BrowserRouter><App {...name} /></BrowserRouter>
), document.getElementById("root"))