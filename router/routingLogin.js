const express = require("express")
const router = express.Router()
var db = require("../models")

router.get("/", function(req,res){
  res.render("login")
})




module.exports = router
