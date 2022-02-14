import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { like, selectUser } from "../../redux/features/userSlice";
import moment from "moment";

export const SinglePost = () => {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [update, setUpdate] = useState(false);
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const photoURL = "http://localhost:5000/images/";
  const user = useSelector(selectUser);
  const createdAt_date = new Date(post.createdAt);
  const year = createdAt_date.getFullYear();
  const month = createdAt_date.getMonth();
  const day = createdAt_date.getDate();
  const hours = createdAt_date.getHours();
  const minutes = createdAt_date.getMinutes();
  const dispatch = useDispatch();

  const deletePost = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user?.data?.username || user?.data?.givenName },
      });

      window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  const updatePost = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user?.data?.username || user?.data?.givenName,
        title,
        description,
        likes: post?.likes,
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/" + pathId);
      setPost(res?.data);
      setTitle(res?.data?.title);
      setLikes(res?.data?.likes?.length);
      setDescription(res?.data?.description);
    };

    getPosts();
  }, [pathId]);

  const handleLikes = async () => {
    try {
      await axios
        .put(`/likes/${post?._id}`)
        .then(setLikes(likes + 1))
        .then(
          dispatch(
            like({
              data: post?._id,
            })
          )
        );
    } catch (err) {}
  };

  return (
    <div className="single-post">
      {user ? (
        <div className="single-post__container">
          {post?.photo && (
            <img
              className="single-post__image"
              src={photoURL + post?.photo}
              alt=""
            />
          )}
          {update ? (
            <input
              type="text"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="single-post__title__update"
            />
          ) : (
            <h1 className="single-post__title">
              {post?.title}
              {post?.username === user?.data?.username ||
                (user?.data?.givenName && (
                  <div className="single-post__edit">
                    <EditIcon
                      className="single-post__icon"
                      onClick={() => setUpdate(true)}
                    />
                    <DeleteIcon
                      className="single-post__icon"
                      onClick={deletePost}
                    />
                  </div>
                ))}
            </h1>
          )}
          <div className="single-post__info">
            <span className="single-post__date">
              {moment([year, month, day, hours, minutes]).fromNow()}
            </span>
            <span className="single-post__author">
              פורסם על ידי:
              <Link to={`/?user=${post?.username}`} className="link">
                <b>{post?.username}</b>
              </Link>
            </span>
            <span onClick={handleLikes}>Likes {likes}</span>
          </div>
          {update ? (
            <textarea
              className="single-post-description__update"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          ) : (
            <p className="single-post-description">{post?.description}</p>
          )}

          {update && (
            <>
              <button className="updateButton" onClick={updatePost}>
                עדכנ/י
              </button>
              <button
                className="cancelButton"
                onClick={() => window.location.reload()}
              >
                ביטול
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="single-post__container">
          {post.photo && (
            <img
              className="single-post__image"
              src={photoURL + post?.photo}
              alt=""
            />
          )}

          <h1 className="single-post__title">{post?.title}</h1>
          <div className="single-post__info">
            <span className="single-post__date">
              {new Date(post?.createdAt).toDateString()}
            </span>
            <span className="single-post__author">
              פורסם על ידי:
              <Link to={`/?user=${post?.username}`} className="link">
                <b>{post?.username}</b>
              </Link>
            </span>
          </div>
          <p className="single-post-description">{post?.description}</p>
        </div>
      )}
    </div>
  );
};
