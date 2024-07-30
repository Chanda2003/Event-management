const express= require("express")
const router= express.Router()

const eventController= require("../Controller/eventController")



router.route("/").get(eventController.getAllevents)
.post(eventController.createEvent)



router.route("/:id").get(eventController.getEvent)
.patch(eventController.updateEvent)
.delete(eventController.deleteEvent)







module.exports= router

