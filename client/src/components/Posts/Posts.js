import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

const NUMBER = 6;

const Posts = ({ posts, page }) => {
  const startIndex = (page - 1) * NUMBER;
  const selectedPosts = posts.slice(startIndex, startIndex + NUMBER);

  return (
    <div className="posts">
      {selectedPosts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
