const express = require("express")
const router = express.Router()
var db = require("../models")

//Tampilkan Table Seluruh
router.get("/", function(req, res){
  db.Teacher.findAll()
    .then(params => {
      // console.log(params);
      res.render("teachers", {data:params} )
  }).catch(function(err){console.log(err)})
})

//Tampilkan Form
router.get('/add', function(req, res){
    res.render('form-teacher')
});
//Proses Tambah Data / Post
router.post('/add', function(req, res){
  db.Teacher.create({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email:req.body.email,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  .then(() =>{
      res.redirect('/teachers')
  })
})
//Form Ganti Data
router.get('/edit/:id', function(req, res){
  db.Teacher.findById(req.params.id)
  .then((params) =>{
    res.render('edit-teacher', {data: params})
  })
})
//Update atau Ganti Data
router.post('/edit/:id', function(req, res){
  db.Teacher.update({
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
    res.redirect('/teachers')
  })
})
//Hapus Data
router.get('/delete/:id', function(req, res){
  db.Teacher.destroy({where:{id:`${req.params.id}`}})
  .then(() =>{
    res.redirect('/teachers')
  })
})

module.exports = router
