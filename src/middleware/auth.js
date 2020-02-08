const jwt = require("jsonwebtoken");
const User = require("../models/user");
const cookieParser = require("cookie-parser");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "obeysudo");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user; //route hanlder now will not have to fetch the user account
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

/* const auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.headers.cookies) {
    token = req.headers.cookies;
  }
  const decoded = jwt.verify(token, "obeysudo");
  const user = await User.findOne({
    _id: decoded._id,
    "tokens.token": token
  });

  if (!user) {
    throw new Error();
  }
  req.token = token;
  req.user = user; //route hanlder now will not have to fetch the user account
  next();
}; */
/* const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, "obeysudo");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user; //route hanlder now will not have to fetch the user account
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
}; */
module.exports = auth;
