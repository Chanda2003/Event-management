
const mongoose= require("mongoose")
const { type } = require("os")


const reviewSchema= new mongoose.Schema({
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
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})


const Review= mongoose.model("review", reviewSchema)


module.exports= Review





























