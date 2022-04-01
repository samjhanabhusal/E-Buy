const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
   
   //creating object
    username:
    {
        type: String,
        required: true, 
        unique: true

    },
    email:
    {
        type: String,
        required: true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    isAdmin:
    {
        type:Boolean, 
        default:false
        // if wehen create user not goona be admin
    },
},

    {
        timestamps: true
        // create date createdat: and updatedat: 
    
})

// var Users = mongoose.model('user', userSchema);
// module.exports = Users;

module.exports = mongoose.model("User", UserSchema)