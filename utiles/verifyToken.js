const jwt= require("jsonwebtoken")



const userToken= (req,res,next)=>{

    const authHeader= req.headers["authorization"]
    const token= authHeader.split(" ")[1]
   if(!authHeader || !token){
    return res.status(400).json({
        status: "fail",
        message:"Invalid Token or user"
    })
}
 

jwt.verify(token, process.env.JWT_SECURE, (err,user)=>{
    if (err){
        return  res.status(401).json({
            status: "fail",
            message:"Verify token fails"
        })
    }
    req.user= user
next()
})
}























module.exports= userToken

