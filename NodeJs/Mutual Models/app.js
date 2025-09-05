const expr = require('express');
const app = expr();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/create', async (req, res)=>{
    let user = await userModel.create({
        username : 'rahul',
        email : 'rahul@gmail.com',
        age : 20,
    })
    res.send(user);
})

app.get('/post/create', async (req, res)=>{
    let post = await postModel.create({
        postdata:"Hi i am rahul and i am an engineer",
        user:"67a785d6605e7eb701270450"
    })
    let user = await userModel.findOne({_id:"67a785d6605e7eb701270450"});
    user.post.push(post._id);
    await user.save();
    res.send({user, post})
})


app.listen(3000);