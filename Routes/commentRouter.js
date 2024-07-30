

const express= require("express")
const router= express.Router()

const commentController= require("../Controller/commentController")



router.route("/").get(commentController.getAllComments)
.post(commentController.createComments)



router.route("/:id").get(commentController.getComments)
.patch(commentController.updateComments)
.delete(commentController.deleteComments)







module.exports= router