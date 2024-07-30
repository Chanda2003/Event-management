

const express= require("express")
const router= express.Router()

const reviewController= require("../Controller/reviewController")



router.route("/").get(reviewController.getAllReviews)
.post(reviewController.createReviews)



router.route("/:id").get(reviewController.getReviews)
.patch(reviewController.updateReviews)
.delete(reviewController.deleteReviews)







module.exports= router