import React from "react";
import Spinner from "./spinner";
import "./style.css";

const Loading = () => (
  <div className="loader">
    <Spinner />
    <p className="loader__text">Loading...</p>
  </div>
);

export default Loading;
