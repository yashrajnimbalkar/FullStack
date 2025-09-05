const express = require('express')
const app = express()

//Middleware
app.use(function(req, res, next){
  console.log("I am Middleware");
  next();
})
app.use(function(req, res, next){
  console.log("I am Middleware 2");
  next();
})


//to take input in form of json and urlencoded
app.use(express.json())
app.use(express.urlencoded({extended:true}))




//url handling
app.get('/', function (req, res) {
  res.send('Ho page')
})
app.get('/profile', function (req, res) {
  res.send('profile page')
})



//error handling
app.use((err, req, res)=>{
  console.error(err.stack)
  res.status(500).send('Something Wrong')
})

//starting server
app.listen(3000)
