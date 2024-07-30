const express= require("express")
const app = require("./app")
const mongoose= require("mongoose")
const dotenv= require("dotenv")

dotenv.config({path:"./config.env"})


mongoose.connect(process.env.DATA_BASE)
.then(()=>{
    console.log("DB Connected")
})
.catch(()=>{
    console.log("error in connect DB")
})



app.listen(8080,()=>{
    console.log("server is running on port 8080...")
})




