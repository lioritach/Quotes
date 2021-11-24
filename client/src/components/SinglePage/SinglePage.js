import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SinglePost } from "../SinglePost/SinglePost";
import "./SinglePage.css";

const SinglePage = () => {
  return (
    <div className="single-page">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default SinglePage;
