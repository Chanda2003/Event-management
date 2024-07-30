

const Comment= require("../Model/commentModel")



const getAllComments= async (req,res)=>{
    try{
        const comments= await Comment.find()

        res.status(200).json({
            status: "Success",
            data: comments
        })

    }catch(err){
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}


const getComments= async (req,res)=>{
    try{
        const comments= await Comment.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            data: comments
        })

    }catch(err){
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}


const createComments= async (req,res)=>{
    try{
        const comments= await Comment.create(req.body)

        res.status(200).json({
            status: "Success",
            data: comments
        })
    }catch(err){
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}

const updateComments= async (req,res)=>{
    try{
        const comments= await Comment.findByIdAndUpdate(req.params.id, req.body)

        res.status(200).json({
            status: "Success",
            data: comments
        })

    }catch(err){
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}

const deleteComments= async (req,res)=>{
    try{
        const comments= await Comment.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            data: comments
        })

    }catch(err){
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}



module.exports= {
    getAllComments,
    getComments,
    createComments,
    updateComments,
    deleteComments
}










