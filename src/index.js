const express = require("express");
require("./db/mongoose"); //ensures mongoose runs and connects
const app = express();
const movieRouter = require("./routers/movies");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(movieRouter);
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
