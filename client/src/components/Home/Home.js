import React, { useEffect, useState } from "react";
import "./Home.css";
import Posts from "../Posts/Posts";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   console.log("is logged in", loggedInUser);
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     console.log("is logged in", foundUser);
  //   }
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };

    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
