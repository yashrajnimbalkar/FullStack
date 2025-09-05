const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MutualModelsDB')

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    age:{
        type:Number,
    },
    post:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'post'
        }
    ]
})


module.exports = mongoose.model('user', userSchema);