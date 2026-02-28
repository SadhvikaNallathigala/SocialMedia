const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// Create Post
router.post("/", async (req, res) => {
  try {
    const { userId, content } = req.body;

    const post = await Post.create({
      user: userId,
      content
    });

    res.json(post);

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  const posts = await Post.find().populate("user", "name");
  res.json(posts);
});

// Like Post
router.put("/like/:id", async (req, res) => {
  try {
    const { userId } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
      await post.save();
    }

    res.json(post);

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;