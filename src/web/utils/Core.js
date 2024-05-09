import React from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
function Core(props) {

  return (
    // <BrowserRouter>
    //   <ErrorBoundary>{props.children}</ErrorBoundary> 
    // </BrowserRouter>
    // <>Core</>
    <BrowserRouter>{props.children}</BrowserRouter>
  );
}

export default Core;
