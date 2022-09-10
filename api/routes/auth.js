
const router = require("express").Router();
const User = require('../models/User');
// const CryptoJS = require("crypto-js");
// const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password:req.body.password
  });
  try {
    const user = newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports= router;


