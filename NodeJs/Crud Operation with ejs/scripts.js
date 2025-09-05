const express = require('express')
const app = express();

const path = require('path');
const { json } = require('stream/consumers');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(3000);