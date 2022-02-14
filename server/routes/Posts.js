const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create new posts
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Edit post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const editPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },

          { new: true }
        );
        console.log(editPost);
        res.status(200).json(editPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You cant edit post of someone else!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("The post has been deleted!");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You cant delete post of someone else!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all posts
router.get("/", async (req, res) => {
  const username = req.query.user;
  const category = req.query.category;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
