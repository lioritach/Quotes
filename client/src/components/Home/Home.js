import React, { useEffect, useState } from "react";
import "./Home.css";
import Posts from "../Posts/Posts";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";
import Pagination from "../Pagination/Pagination";
import ReactPaginate from "react-paginate";

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
      console.log(res.data);
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

      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}

      {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> */}
    </>
  );
};

export default Home;
