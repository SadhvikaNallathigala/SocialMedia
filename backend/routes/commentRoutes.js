const express = require("express");
const Comment = require("../models/Comment");

const router = express.Router();

// Add Comment
router.post("/", async (req, res) => {
  try {
    const { userId, postId, text } = req.body;

    const comment = await Comment.create({
      user: userId,
      post: postId,
      text
    });

    res.json(comment);

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// Get Comments for a Post
router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user", "name");

  res.json(comments);
});

module.exports = router;