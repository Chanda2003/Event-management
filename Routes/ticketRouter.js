const express= require("express")
const router= express.Router()
const ticketController= require("../Controller/ticketController")



router.route("/").get(ticketController.getAllTicket)
.post(ticketController.createTicket)



router.route("/:id").get(ticketController.getTicket)
.put(ticketController.updateTicket)
.delete(ticketController.deleteTicket)







module.exports= router