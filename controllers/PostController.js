const Post = require('../models/Post')


class PostController {
   
    static createPost = async (req, res) => {
        const post = new Post({
            title: req.body.title,
            content: req.body.content
        });
        await post.save();
        res.send(post);
    }

    static getPosts = async (req, res) => {
        const posts = await Post.find()
        res.send(posts);    
    }

    static getPostsById = async (req, res) => {
        try{
            const post = await Post.findOne({_id: req.params.id});
            res.send(post);
        }
        catch(err){
            res.status(404);
            res.send({err: 'The post Does Not Exist!'});
        }
    }

    static updatePost = async (req, res) => {
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
    }

    static deletePost = async (req, res) => {
        try{
            await Post.deleteOne({ _id: req.params.id});    
            res.status(204).send();
        }
        catch{
            res.status(404).send({error: 'Post Doesn\'t Exist'});   
        }
    }
    
}

module.exports = PostController;