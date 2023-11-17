const mongoose = require('mongoose');
const Car = require('./models/Car');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const connectionString = 'mongodb://localhost:27017/testdb';

start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    //Add comment
    // const comment = await Comment.findOne({});
    // const post = await Post.findOne({});
    // post.comments.push(comment);

    // await post.save();

    //Read post
    const post = await Post.findOne({}).populate('comments', 'content');
    console.log(post);
    
}
