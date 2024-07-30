const mongoose= require("mongoose")
const { type } = require("os")


const ticketSchema= new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    }
})






const Ticket= mongoose.model("ticket", ticketSchema)


module.exports= Ticket
















