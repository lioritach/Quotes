const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "fssf828hffh2i32@$$%(^&#$@#dfhfg@$@#^$&*gdgdhjjdfsf*&@3452@hjkmds";

// Create - post method
// Delete - delete method
// Updating - put method
// fetching - get method

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // When there is no user found
    !user && res.status(400).json("Wrong credentials!");

    // Compare the encrypted password vs password from the db.
    const validate = await bcrypt.compare(req.body.password, user.password);
    // Wrong password
    !validate && res.status(400).json("Wrong credentials!");

    // If everything is ok
    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET
    );

    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (err) {
    res.status(200).json(err);
  }
});

// Register
router.post("/register", async (req, res) => {
  try {
    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
