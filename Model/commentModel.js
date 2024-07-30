
const mongoose= require("mongoose")
const { type } = require("os")


const commentSchema= new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})


const Comment= mongoose.model("comment", commentSchema)


module.exports= Comment