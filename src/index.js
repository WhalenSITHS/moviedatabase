const express = require("express");
require("./db/mongoose"); //ensures mongoose runs and connects
const app = express();
const movieRouter = require("./routers/movies");
const userRouter = require("./routers/user");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(movieRouter);
app.use(userRouter);
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
const bcrypt = require("bcryptjs");

const testFunction = async () => {
  const password = "siths1234";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("siths1234", hashedPassword);
  console.log(isMatch);
};

testFunction();
