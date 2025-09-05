const express = require('express')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const app = express();


app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie("name", "Rajnikant");
    res.send("Done");
})

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send("Read page");
})

app.get('/password', (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash('rahul@45', salt, function(err, hash) {
            console.log(hash);
        });
    });
    res.send("Password page");
});

app.get('/checkPassword', function(req, res){
    bcrypt.compare('rahul@45', '$2b$10$jsbV5E2MUHanGA1hWR6f6e.uCLBDUyb1z8B8PaPjWTTtBqn4brWnm', function(err, result) {
        res.send(result);
    });
})

app.get('/generateToken', (req, res)=>{
    const token = jwt.sign({email : 'rahul@45'}, 'secret_key');
    res.cookie("token", token);
    res.send("Token generated");
})

app.get('/seeDecryptedToken', (req, res)=>{
    const token = req.cookies.token;
    const decoded_data_token = jwt.verify(token, 'secret_key');
    console.log(decoded_data_token);
    res.send("Decrypted token");
})

app.listen(3000)