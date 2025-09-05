const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const userModel = require('./models/user');
const bcrypt = require('bcrypt');

app.set ("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
    res.render('index');
})


app.post('/create',  (req, res)=>{
    let {name, email, password, age} = req.body;

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            const createdUser = await userModel.create({
                name:name,
                email:email,
                password:hash,
                age:age
            });

            let token = jwt.sign({email}, 'shhhhhhhh');
            res.cookie('token', token);
            res.send(createdUser);
        });
    });
    
});


app.get('/logout', (req, res)=>{
    res.cookie('token','');
    res.send('token deleted')
}); 

app.get('/login', (req, res)=>{
    res.render('login');
})

app.post('/login', async (req, res)=>{
    const user = await userModel.findOne({email : req.body.email});
    if(!user){
        res.send('user not found')
    } 
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(result){
            const token = jwt.sign({email : user.email}, 'shhhhhhhh');
            res.cookie('token', token);
            res.send("You can login");
        }
        else{
            res.send("You can't login");
        }
    });
});



app.listen(3000);