import React, { useEffect, useState } from "react";
import "./Home.css";
import Posts from "../Posts/Posts";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router";
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";

const NUMBER = 6;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("/posts/" + search);
      setLoading(false);
      setPosts(res.data);
      setTotalPages(Math.ceil(res.data.length / NUMBER));
    };

    fetchPosts();
  }, [search]);

  const handleClick = (num) => {
    setPage(num);
  };

  return (
    <>
      <Header />
      <p>
        עמוד {page} מתוך {totalPages}
      </p>
      {loading ? (
        <p>Loading ... </p>
      ) : (
        <>
          <div className="home">
            <Posts posts={posts} page={page} />

            <Sidebar />
          </div>
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </>
      )}
    </>
  );
};

export default Home;
