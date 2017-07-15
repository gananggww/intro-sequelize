const express = require("express")
const router = express.Router()
var db = require("../models")

//Tampilkan Table Seluruh
router.get("/", function(req, res){
  db.Student.findAll()
    .then(params => {
      // console.log(params);
      res.render("students", {data:params} )
  }).catch(function(err){console.log(err)})
})

//Tampilkan Form
router.get('/add', function(req, res){
    res.render('form-student')
});
//Proses Tambah Data / Post
router.post('/add', function(req, res){
  db.Student.create({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email:req.body.email,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  .then(() =>{
      res.redirect('/students')
  })
})
//Form Ganti Data
router.get('/edit/:id', function(req, res){
  db.Student.findById(req.params.id)
  .then((params) =>{
    res.render('edit-student', {data: params})
  })
})
//Update atau Ganti Data
router.post('/edit/:id', function(req, res){
  db.Student.update({
    first_name: `${req.body.firstname}`,
    last_name:`${req.body.lastname}`,
    email:`${req.body.email}`,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    where: {
      id: `${req.params.id}`
    }
  })
  .then(()=>{
    res.redirect('/students')
  })
})

//Hapus Data
router.get('/delete/:id', function(req, res){
  db.Student.destroy({where:{id:`${req.params.id}`}})
  .then(() =>{
    res.redirect('/students')
  })
})

module.exports = router
