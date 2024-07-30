const Ticket= require("../Model/ticketModel")


const getAllTicket= async (req,res)=>{
    try{
        const tickets= await Ticket.find()
        res.status(200).json({
            status: "Success",
            result: tickets.length,
            data: tickets
        })
    
    }catch(err){
        res.status(500).json({
            status:"fail",
            message: err.message
        })
    }
    }
    
    const getTicket= async (req,res)=>{
        try{
            const ticket= await Ticket.findById(req.params.id)
            res.status(200).json({
                status: "Success",
                data: ticket
            })
        }catch(err){
            res.status(500).json({
                status:"fail",
                message: err.message
            })
        }
    }
    
    const createTicket= async (req,res)=>{
        try{
            const ticket= await Ticket.create(req.body)
            res.status(201).json({
                status: "Success",
                data: ticket
            })
        }catch(err){
            res.status(500).json({
                status:"fail",
                message: err.message
            })
        }
    }
    
    
    const updateTicket= async (req,res)=>{
        try{
            const updateticket= await Ticket.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({
                status: "Success",
                data: updateticket
            })
        }catch(err){
            res.status(500).json({
                status:"fail",
                message: err.message
            })
        }
    }
    
    const deleteTicket= async (req,res)=>{
        try{
            const deleteTicket= await Ticket.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: "Success",
                data: deleteTicket
            })
        }catch(err){
            res.status(500).json({
                status:"fail",
                message: err.message
            })
        }
    }
    
    
    
    
    module.exports= {
        getAllTicket,
        createTicket,
        getTicket,
        updateTicket,
        deleteTicket
    }
















