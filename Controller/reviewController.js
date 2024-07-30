



const Review= require("../Model/reviewModel")

const Apperror= require("../utiles/appError")

const getAllReviews= async (req,res)=>{
    try{
        const reviews= await Review.find()
        if(reviews.length==0){
            return res.status(404).json({
                status: "fail",
                message: "No review found"
            })
        }
        res.status(200).json({
            status: "Success",
            data: reviews
        })

    }catch(err){
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}


const getReviews= async (req,res,next)=>{
    try{
        const reviews= await Review.findById(req.params.id)
        res.status(200).json({
            status: "Success",
            data: reviews
        })

    }catch(err){
        res.status(400).json({
            status:"fail",
            message: (`${err.value} Not found`),
           
        })
        console.log(Apperror(400, "Not Found")(req,res,next))
    }
}


const createReviews= async (req,res)=>{
    try{
        const reviews= await Review.create(req.body)
        res.status(200).json({
            status: "Success",
            data: reviews
        })

    }catch(err){
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}

const updateReviews= async (req,res)=>{
    try{
        const reviews= await Review.findByIdAndUpdate(req.params.id, req.body)

        res.status(200).json({
            status: "Success",
            data: reviews
        })
    }catch(err){
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}

const deleteReviews= async (req,res)=>{
    try{
        const reviews= await Review.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            data: reviews
        })

    }catch(err){
        res.status(400).json({
            status:"fail",
            message: err.message
        })
    }
}



module.exports= {
    getAllReviews,
    getReviews,
    createReviews,
    updateReviews,
    deleteReviews
}


