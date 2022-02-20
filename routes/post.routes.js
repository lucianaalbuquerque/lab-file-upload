const router = require("express").Router();
const mongoose = require("mongoose");

// ℹ️ Handles password encryption
const bcryptjs = require("bcryptjs");

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require("../models/User.model");

// require (import) middleware functions
const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");
const PostModel = require("../models/Post.model");

router.get('/post-form', (req,res,next) => {
    res.render('post-form')
})

router.post('/post-form', (req,res,next) => {
    const {content, creatorID, picPath, picName} = req.body
    Post.create({content, creatorID, picPath, picName})
    .then(post => {
        res.render('home', {post})
    })
})

/* the GET route to display the post-form,
the POST route to actually create the post (this route should include file uploading),
the GET route to display the posts and
the GET route to display post-details. */

module.exports = router;
