import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import moment from "moment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Post = ({ post }) => {
  const photoURL = "http://localhost:5000/images/";
  const createdAt_date = new Date(post.createdAt);
  const year = createdAt_date.getFullYear();
  const month = createdAt_date.getMonth();
  const day = createdAt_date.getDate();
  const hours = createdAt_date.getHours();
  const minutes = createdAt_date.getMinutes();

  return (
    <div className="container1">
      <div className="card1">
        <div className="card-header">
          <div className="user">
            <AccountCircleIcon className="icon-user" />
            <div className="user-info">
              <Link to={`/?user=${post.username}`} className="link">
                <h5 className="post-username">{post.username}</h5>
              </Link>
              <small>
                {moment([year, month, day, hours, minutes]).fromNow()}
              </small>
            </div>
          </div>
          <Link to={`/post/${post._id}`} className="link">
            {post.photo ? (
              <img src={photoURL + post.photo} alt="rover" />
            ) : (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                alt="no-image"
              />
            )}
          </Link>
        </div>
        <div className="card-body">
          <div className="cat-inline">
            {post.categories &&
              post.categories.map((category) => (
                <span className="tag tag-teal">{category}</span>
              ))}
          </div>

          <Link to={`/post/${post._id}`} className="link">
            <h4>{post.title}</h4>
            <p>{post.description}</p>
          </Link>
        </div>
      </div>
    </div>
    // <div className="post">
    //   {post.photo && (
    //     <figure className="hover-rotate">
    //       <img
    //         src={photoURL + post.photo}
    //         className="post-image"
    //         alt="mishpatimyafim"
    //       />
    //     </figure>
    //   )}

    //   <div className="postInfo">
    //     <div className="postTags">
    //       {post.categories.map((category) => (
    //         <span className="postTag">{category}</span>
    //       ))}
    //     </div>
    //     <Link to={`/post/${post._id}`} className="link">
    //       <span className="postTitle">{post.title}</span>
    //     </Link>
    //     <hr />
    //     <span className="postDate">
    //       {new Date(post.createdAt).toDateString()}
    //     </span>
    //   </div>
    //   <p className="postDescription">{post.description}</p>
    // </div>
  );
};

export default Post;
