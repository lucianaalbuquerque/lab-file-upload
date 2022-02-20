const router = require("express").Router();
const mongoose = require("mongoose");

// ℹ️ Handles password encryption
const bcryptjs = require("bcryptjs");

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require("../models/User.model");
const Post = require('../models/Post.model')

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

router.get('/home', (req,res,next) => {
    res.redirect('/home')
})

module.exports = router;
