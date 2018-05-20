//Controllers/server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
var http = require("http");
const expressValidator = require("express-validator");
const User = require("../models/User");
const Post = require("../models/Post");
var { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcrypt");

const app = express();

app.use(bodyparser.json());

mongoose.connect("mongodb://localhost/facebook");
app.use(
  session({
    secret: "supersecretstring12345!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 * 30 }
    // store: new MongoStore({ mongooseConnection: mongoose.connection }) //not neccesary
  })
);

app.use(
  cors({
    //tis adds session to req, like so: req.session
    origin: ["http://localhost:3000"],
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: true //allow setting of cookies
  })
);





//register user
///////////////////////create user

  function authenticateUser(req, res, next) {
    if (req.session.user) return next();
    res.json({ error: true, message: "Not authenticated, please login!" });
  }
  const regValidation = [
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email should be an email address"),
    check("name")
      .not()
      .isEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3 })
      .withMessage("Username should be at least 3 letters"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password should be at least 6 characters"),
    check(
      "con_password",
      "Password confirmation  is required or should be the same as password"
    ).custom(function(value, { req }) {
      if (value !== req.body.password) {
        throw new Error("Password don't match");
      }
      return value;
    }),
    check("email").custom(value => {
      return User.findOne({ email: value }).then(function(user) {
        if (user) {
          throw new Error("This email is already in use");
        }
      });
    })
  ];
/////////////////// create user & hashing:
  function createUser(req, res) {
    const user = new User(req.body);
    var errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send({ errors: errors.mapped() });
    }

    user.password = user.hashPassword(user.password);
    user
      .save()
      .then(user => {
        return res.json({
          ok: true,
          message: "You are registerated successfully."
        });
      })
      .catch(error => {
        return res.json({
          error: "Something went wrong, user is not registerated!",
          error
        });
      });
  }
  app.post("/api/register", regValidation, createUser);

///////////////////////User session
  app.get("/api/current_user", function(req, res) {
    if (req.session.user) {
      User.findById(req.session.user._id, [
        "email",
        "name",
      ]).then(function(user) {
        res.send(user);
      });
    } else {
      res.send({ error: true, message: "You are not logged in!" });
    }
  });


//--------------------------------------------------------------------------------
//////////////////////////////////////////////Login
//login validation
  const logValidation = [
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email is required"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
  ];
//login user
  function loginUser(req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.mapped() });
    }
    User.findOne({
      email: req.body.email
    })
      .then(function(user) {
        if (!user) {
          return res.send({ error: true, message: "User does not exist!" });
        }
        if (!user.comparePassword(req.body.password, user.password)) {
          return res.send({ error: true, message: "Wrong password!" });
        }
        req.session.user = user;
        req.session.isLoggedIn = true;
        return res.send({ message: "You are signed in" });
        res.send(user);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  app.post("/api/login", logValidation, loginUser);

  //---------------------------------------------------------------------------
//////////////////////Prevent user from login twice
  app.get("/api/isloggedin", (req, res) => {
    if (req.session.isLoggedIn) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
  //---------------------------------------------------------------------------

  const postValidation = [
    check("post")
      .not()
      .isEmpty()
      .withMessage("Please write something.")
  ];

  function addPost(req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.mapped() });
    }
    var post = new Post(req.body);
    post.user = req.session.user._id;
    post
      .save()
      .then(user => {
        res.json({ success: true });
      })
      .catch(error => {
        res.json(error);
      });
  }
  app.post("/api/addpost", postValidation, authenticateUser, addPost);

  //.----------------------------------------------------------------------

  app.delete("/api/postdelete/:id", (req, res) => {
    Post.findOneAndRemove({ _id: req.params.id })
      .then(res => {
        res.send(res);
      })
      .catch(err => {
        res.send(err);
      });
  });
  //-----------------------------------------------------------------------
  app.post("/api/postupvote/:id", (req, res) => {
    Post.findById(req.params.id).then(function(post) {
      post.vote = post.vote + 1;
      post.save().then(function(post) {
        res.send(post);
      });
    });
  });
  //-----------------------------------------------------------------------
  app.post("/api/update/:id", function(req, res) {
    Post.findById(req.params.id)
      .then(function(post) {
        post.post = req.body.post;
        post.save().then(function(post) {
          res.send(post);
        });
      })
      .catch(err => res.send(err));
  });
  //-----------------------------------------------------------------------

  function showPosts(req, res) {
    Post.find()
      .populate("user", ["username", "email"])
      .sort({ vote: "desc" })
      .then(post => {
        res.json(post);
      })
      .catch(error => {
        res.json(error);
      });
  }
  app.get("/api/showposts", showPosts);
  //-----------------------------------------------------------------------

  app.get("/api/logout", (req, res) => {
    req.session.destroy();
    res.send({ message: "Logged out!" });
  });







/////////////////listining to port
app.listen(process.env.PORT || 8000, () => {
    console.log("Listening to poty 8000");
  });
  