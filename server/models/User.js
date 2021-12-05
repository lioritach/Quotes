const mongoose = require("mongoose");

let validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: "כתובת מייל הינה חובה!",
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validateEmail, "נא למלא כתובת מייל"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "נא למלא כתובת מייל תקנית",
      ],
    },

    profileImage: {
      type: String,
      default: "",
    },

    isAdmin: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
