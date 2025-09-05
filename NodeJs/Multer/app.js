const express = require('express');
const app = express();
const multer = require('multer')
app.set('view engine', 'ejs');
app.use(express.static('public'));
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, function (err, bytes){
            const fn = bytes.toString('hex') + path.extname(file.originalname);
            cb(null, fn);
        })
    }
})

const upload = multer({ storage: storage })


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', upload.single('avatar'), (req, res) => {
    console.log(req.file);
})


app.listen(3000);