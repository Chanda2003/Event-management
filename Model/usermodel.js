const mongoose= require("mongoose")
const { type } = require("os")




const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Provide your username"]
    },
    email: {
        type: String,
        required: [true, "Provide your email"]
    },
    password: {
        type: String,
        required: [true, "Provide you password"]
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
       type: Date,
       default: Date.now()
    }
})




const User= mongoose.model("user", userSchema)



module.exports= User




















