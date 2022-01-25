const express = require('express');
const router = express.Router()

const PostController = require('../controllers/PostController')

const Post = require('../models/Post')

//create post
router.post('/posts', PostController.createPost);

//get all posts
router.get('/posts', PostController.getPosts);

//get post by Id
router.get('/posts/:id', PostController.getPostsById);

//Update Post
router.patch('/posts/:id', PostController.updatePost);

//Deleting post
router.delete('/posts/:id', PostController.deletePost)

module.exports = router;