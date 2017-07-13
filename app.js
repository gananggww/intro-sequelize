var express = require("express")
var app = express()
var path = require("path")
var bodyParser = require("body-parser")

const router = express.Router()
// const ejs = require("ejs")
app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

// var db = require("./models")
//require
var teacherRoute = require('./router/routingTeacher')


app.use("/teachers", teacherRoute)
// app.use('/subject', subjectsRoute);


app.listen(3200);
