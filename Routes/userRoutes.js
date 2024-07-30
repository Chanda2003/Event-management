const express= require("express")
const router= express.Router()


const userController= require("../Controller/userContoller")
const verfiyToken= require("../utiles/verifyToken")




router.route("/getallusers").get(verfiyToken , userController.getallUsers)
router.route("/signup").post(userController.signup)
router.route("/login").post(userController.login)







module.exports= router