import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

export const SinglePost = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + pathId);
      setPost(res.data);
    };

    getPosts();
  }, [pathId]);

  return (
    <div className="single-post">
      <div className="single-post__container">
        {post.photo && (
          <img className="single-post__image" src={post.photo} alt="" />
        )}

        <h1 className="single-post__title">
          {post.title}
          <div className="single-post__edit">
            <EditIcon className="single-post__icon" />
            <DeleteIcon className="single-post__icon" />
          </div>
        </h1>
        <div className="single-post__info">
          <span className="single-post__date">
            {new Date(post.createdAt).toDateString()}
          </span>
          <span className="single-post__author">
            פורסם על ידי:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
        </div>
        <p className="single-post-description">{post.description}</p>
      </div>
    </div>
  );
};
