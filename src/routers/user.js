const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const multer = require("multer");
const router = new express.Router();
const upload = require("../middleware/upload");

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateToken(); //why lowercase?
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateToken(); //why lowercase?
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).send("user not found");
  }
});
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send("You are Logged Out Now");
  } catch (e) {
    res.status(500).send();
  }
});

router.post(
  "/users/me/profilePic",
  auth,
  upload.single("profilePic"),
  async (req, res) => {
    try {
      req.user.profilePic = req.file.buffer;
      await req.user.save();
      res.status(200).send(req.user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
router.get("/users", async (req, res) => {
  try {
    let users = await User.find({});
    res.send(users);
    console.log(users);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});
router.get("/users/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "graduated"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    res.status(400).send({ error: "Invalid Updates" });
  }
  try {
    let user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
