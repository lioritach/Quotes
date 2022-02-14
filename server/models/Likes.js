const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    postId: {
      type: String,
    },
    likes: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Likes", likesSchema);
