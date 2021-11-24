const router = require("express").Router();
const Category = require("../models/Category");

//Create new categories
router.post("/", async (req, res) => {
  const newCategories = new Category(req.body);
  try {
    const savedCategories = await newCategories.save();
    res.status(200).json(savedCategories);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
