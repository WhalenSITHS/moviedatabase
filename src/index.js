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
