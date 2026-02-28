const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
  token,
  userId: user._id
});

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

// Follow User
router.put("/follow/:id", async (req, res) => {
  try {
    const { userId } = req.body;

    const userToFollow = await User.findById(req.params.id);
    const currentUser = await User.findById(userId);

    if (!userToFollow.followers.includes(userId)) {
      userToFollow.followers.push(userId);
      currentUser.following.push(req.params.id);

      await userToFollow.save();
      await currentUser.save();
    }

    res.json({ message: "User followed successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});