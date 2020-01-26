//this is where we will cleanly route to our movie paths
const express = require("express");
const Movie = require("../models/movie");
const router = new express.Router();

router.post("/movies", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/movies", async (req, res) => {
  try {
    let movies = await Movie.find({});
    res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/movies/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["review"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    res
      .status(400)
      .send({ error: "Invalid Updates, please only update the review" });
  }
  try {
    const movie = await Movie.findById(req.params.id);
    updates.forEach(update => (movie[update] = req.body[update]));
    await movie.save();
    if (!movie) {
      return res.status(404).send();
    }
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      res.status(404).send();
    }
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
