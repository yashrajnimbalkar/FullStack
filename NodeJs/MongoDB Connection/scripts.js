const express = require('express')

const app = express();
const users = require('./UserModel') 

app.get('/', (req, res)=>{
    res.send('Home')
})
app.get('/create',  async function(req, res){
    let user = await users.create({
        name : "ramesh",
        email : "ramesh@123",
        password : "ramesh333"
    })
    res.send(user);
})

app.get('/update',  async function(req, res){
    let user = await users.findOneAndUpdate({name:"rahul"}, {$set : {email:"rahul@345"}}, {new:true});
    res.send(user);
})

app.get('/delete', async (req, res)=>{
    let user = await users.findOneAndDelete({name:'ramesh'});
    res.send(user);
})

app.get('/read', async (req, res)=>{
    let user = await users.find();
    res.send(user);
})
app.listen(3000);