
const Event= require("../Model/EventModel")


const getAllevents= async (req,res)=>{
try{
    const events= await Event.find()
    res.status(200).json({
        status: "Success",
        result: events.length,
        data: events
    })

}catch(err){
    res.status(500).json({
        status:"fail",
        message: err.message
    })
}
}

const getEvent= async (req,res)=>{
    try{
        const event= await Event.findById(req.params.id)
        res.status(200).json({
            status: "Success",
            data: event
        })
    }catch(err){
        res.status(500).json({
            status:"fail",
            message: err.message
        })
    }
}

const createEvent= async (req,res)=>{
    try{
        const event= await Event.create(req.body)
        res.status(201).json({
            status: "Success",
            data: event
        })
    }catch(err){
        res.status(500).json({
            status:"fail",
            message: err.message
        })
    }
}


const updateEvent= async (req,res)=>{
    try{
        const updateevent= await Event.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: "Success",
            data: updateevent
        })
    }catch(err){
        res.status(500).json({
            status:"fail",
            message: err.message
        })
    }
}

const deleteEvent= async (req,res)=>{
    try{
        const deleteEvent= await Event.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            data: deleteEvent
        })
    }catch(err){
        res.status(500).json({
            status:"fail",
            message: err.message
        })
    }
}




module.exports= {
    getAllevents,
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent
}































