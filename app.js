require( './db' )
const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
var mongoose = require('mongoose')
var day = mongoose.model('day')
var comments = mongoose.model('comments')
express()
.use(express.static(path.join(__dirname, 'public')))
.use(bodyParser.urlencoded({ extended: false }))
.use(function(req, res, next) { next() })
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
.get('/', (req, res) => res.render('land'))
.get('/logs', (req, res) => res.render('logs'))
.get('/thankyou', (req, res) => res.render('thankyou'))
.get('/learn', (req, res) => res.render('learn'))
.get('/comments', (req, res) => res.render('comments'))
.post('/comments', (req, res) => {
  new comments({
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
  }).save(function (err, day) {
    if (err) { console.log(err) }
    res.redirect('/thankyou')
  })

})
.get('/meditate', (req, res) => res.render('meditate'))

.get('/diary', function(req, res){
  day.find({}, function(err,days){
    res.render('diary',{days: days})
  })
})
.get('/delete', (req, res) => res.render('delete'))
.get('/practice', (req, res) => res.render('practice'))
.get('/d', (req, res) => res.sendFile("diary.html"))

.post("/diary/:id/delete",function(req, res){
  day.findByIdAndRemove(req.params.id, function (){
    return res.redirect('/diary')
  })

})

.post('/diary', (req, res) => {
  new day({
    date: req.body.date,
    stars: req.body.stars,
    best: req.body.best,
    bad: req.body.bad,
    better:req.body.better,
    quote:req.body.quote,
  }).save(function (err, day) {
    if (err) { console.log(err) }
    res.redirect('/logs')
  })
})
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
