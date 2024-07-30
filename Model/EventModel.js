


const mongoose= require("mongoose")




const eventSchema= new mongoose.Schema({
    title: {
        type: String,
        required: [true, "provide your Event Title"]
    },
    description: {
        type: String,
        required: [true, "Provide your Event Description"]
    },
    date: {
        type: Date,
        required: [true, "Provide your Event Date"]
    },
    location: {
        type: String,
        required: [true, "Provide your Event Location"]
    },
    category: {
        type: String,
        required: [true, "Provide your Event Category"]
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})


const Event= mongoose.model("event", eventSchema)

module.exports= Event