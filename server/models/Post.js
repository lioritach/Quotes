const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    photo: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      unique: true,
    },

    categories: {
      type: Array,
    },

    username: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
    },
    comments: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
