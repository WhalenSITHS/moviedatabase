const express = require("express");
require("./db/mongoose"); //ensures mongoose runs and connects
const app = express();
//const mongoose = require("mongoose");
const movieRouter = require("./routers/movies");
const userRouter = require("./routers/user");
const reviewRouter = require("./routers/reviews");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(movieRouter);
app.use(userRouter);
app.use(reviewRouter);
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
//const bcrypt = require("bcryptjs");

/* const testFunction = async () => {
  const password = "siths1234";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("siths1234", hashedPassword);
  console.log(isMatch);
};

testFunction();
 */
/* const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "userIdHere" }, "obeysudo", {
    expiresIn: "3 days"
  });
  console.log(token);

  const data = jwt.verify(token, "obeysudo");
  console.log(data);
};

myFunction();
 */

/* const Review = require("./models/review");
const User = require("./models/user"); */
/* const main = async () => {
  const review = await Review.findById("5e2dc9a60dca161d1841da34");
  await review.populate("owner").execPopulate();
  console.log(review.owner);
};
main(); */

const main = async () => {
  const user = await User.findById("5e35b1947cd59a237c51b9a2");
  await user.populate("reviews").execPopulate();
  console.log(user.reviews);
};
main();
