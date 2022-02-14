const router = require("express").Router();
const Post = require("../models/Post");

router.put("/:id", async (req, res) => {
  const a = 1;
  const tet = await Post.findById(req.params.id);
  tet.likes.push(a);
  await tet.save();
  res.status(200).json(tet);
});

module.exports = router;
