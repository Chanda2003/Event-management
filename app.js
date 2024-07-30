const express= require("express")

const app= express()
const userRouter= require("./Routes/userRoutes")
const eventRouter= require("./Routes/eventRouter")
const ticketRouter= require("./Routes/ticketRouter")
const commentRouter= require("./Routes/commentRouter")
const reviewRouter= require("./Routes/reviewRouter")

app.use(express.json())




app.use("/user", userRouter)


app.use("/events", eventRouter)

app.use("/tickets", ticketRouter)

app.use("/comments", commentRouter)

app.use("/review", reviewRouter)


app.all("*",(req,res)=>{
    res.status(400).json({
        status: "fail",
        message: "route not found"
    })
})





module.exports= app







