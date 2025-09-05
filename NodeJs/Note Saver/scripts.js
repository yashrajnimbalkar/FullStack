const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')

//take input in form of json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//using static files
app.use(express.static(path.join(__dirname,'public')));


//connecting ejs
app.set('view engine', 'ejs')





app.get('/', function(req, res){
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files:files})
    })
    
});

app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect('/')
    });
})

app.get('/files/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}.txt`, "utf-8", function(err, filedata) {
        res.render('detail', {title:req.params.filename, detail:filedata});
    })
})
// app.get('/user/:username/:age', function(req, res){
//     let username = req.params.username;
//     let age = req.params.age;
//     res.send(`Welcome ${username}, your age is ${age}`);
// });

app.listen(3000);

