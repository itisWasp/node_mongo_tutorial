const express = require('express');
const router = express.Router()

module.exports = router;

const Post = require('./models/Post.js')

//get all posts

router.get('/posts',async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    await post.save();
    res.send(post)
});

//get post by Id
router.get('/posts/:id', async (req, res) => {
    try{
        const post = await Post.findOne({_id: req.params.id});
        res.send(post);
    }
    catch(err){
        res.status(404);
        res.send({err: 'The post Does Not Exist!'});
    }
});

//Update Post
router.update('/posts/:id', async (req, res) => {
    try{
        const post = await Post.findOne({_id: req.params.id});
        if(req.body.title){
            post.title = req.body.title;
        }
        if(req.body.content){
            post.content = req.body.content;
        }

        await post.save()
        res.send(post)
    }
    catch{
        res.status(404);
        res.send({error: 'Post Doesn\'t Exist'});
    }
});

//Deleting post
router.delete('/posts/:id', async (req, res)=>{
    try{
        await Post.deleteOne({ _id: req.params.id});    
        res.status(204).send();
    }
    catch{
        res.status(404).send({error: 'Post Doesn\'t Exist'});   
    }
})

module.exports = router;