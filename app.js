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
var teacherRoute = require("./router/routingTeacher")
var subjectRoute = require("./router/routingSubject")
var studentRoute = require("./router/routingStudent")
var indexRoute = require("./router/routingIndex")

// app.get("/", function(req,res){
//   res.render("index")
// })
app.use("/",indexRoute);
app.use("/teachers", teacherRoute)
app.use("/subjects", subjectRoute);
app.use("/students", studentRoute);

app.listen(3200);
