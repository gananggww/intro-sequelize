const express = require("express")
const router = express.Router()
var db = require("../models")

router.get("/", function(req, res){
  db.Subject.findAll({
    include:[db.Teacher]
  })
    .then(params => {
      // console.log(params);
      res.render("subjects", {data:params} )
  }).catch(function(err){console.log(err)})
})

//Tampilkan Form
router.get('/add', function(req, res){
  db.Subject.findAll({
    include:[db.Teacher]
  })
  .then(params => {
    res.render('form-subject', {data:params})
  })
});

//Proses Tambah Data / Post
router.post('/add', function(req, res){
  db.Subject.create({
    subject_name: req.body.subjectname,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  .then(() =>{
      res.redirect('/subjects')
  })
})

//Form Ganti Data
router.get('/edit/:id', function(req, res){
  db.Subject.findById(req.params.id)
  .then((params) =>{
    res.render('edit-subject', {data: params})
  })
})

//Update atau Ganti Data
router.post('/edit/:id', function(req, res){
  db.Subject.update({
    subject_name: `${req.body.subjectname}`,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    where: {
      id: `${req.params.id}`
    }
  })
  .then(()=>{
    res.redirect('/subjects')
  })
})
//Hapus Data
router.get('/delete/:id', function(req, res){
  db.Subject.destroy({where:{id:`${req.params.id}`}})
  .then(() =>{
    res.redirect('/subjects')
  })
})

module.exports = router
