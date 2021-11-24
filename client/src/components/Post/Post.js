import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      {/* <img src={image} className="post-image" alt="mishpatimyafim" />
      <div className="postInfo">
        <div className="postTags">
          <span className="postTag">{"" + tags}</span>
        </div>
        <Link to={`/post/${id}`} className="link">
          <span className="postTitle">{title}</span>
        </Link>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDescription">{message}</p> */}
      {post.photo && (
        <figure className="hover-rotate">
          <img src={post.photo} className="post-image" alt="mishpatimyafim" />
        </figure>
      )}

      <div className="postInfo">
        <div className="postTags">
          {post.categories.map((category) => (
            <span className="postTag">{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
};

export default Post;
