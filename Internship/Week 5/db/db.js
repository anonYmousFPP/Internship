const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abhay14122001:abyyadavjiaddy@abhayyadav.payn3ae.mongodb.net/user');
const user = new mongoose.Schema({
    name: {
        type:String,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    }
})

const User = mongoose.model('User', user);
module.exports = {
    User
}