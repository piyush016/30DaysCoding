const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/user");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://coding:code1234@cluster0.be50xcg.mongodb.net/");

//Sign Up
app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      college: req.body.college,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

//Login
app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    console.log("User NotAuthneticated");
    return res.json({ status: "error", user: false });
  }
});

app.listen(1337, () => {
  console.log("Server is started");
});
