<<<<<<< HEAD
const express = require('express')
const router = require('./router/cliente.router')
const app = express();

app.set('view engine','ejs')
app.use('/publico',express.static('publico'));

app.get('/',function(req,res){
    res.render('index');

})
app.get('/segunda',function(req,res){
    res.render('segunda');

})
app.get('/tercera',function(req,res){
    res.render('tercera');

})
app.get('/iniciarsesion',function(req,res){
    res.render('iniciarsesion');

})
app.get('/formulario',function(req,res){
    res.render('formulario');

})

app.use('/v1',router)

=======
const express = require('express')
const router = require('./router/cliente.router')
const app = express();

app.set('view engine','ejs')
app.use('/publico',express.static('publico'));

app.get('/',function(req,res){
    res.render('index');

})
app.get('/segunda',function(req,res){
    res.render('segunda');

})
app.get('/tercera',function(req,res){
    res.render('tercera');

})
app.get('/iniciarsesion',function(req,res){
    res.render('iniciarsesion');

})
app.get('/formulario',function(req,res){
    res.render('formulario');

})

app.use('/v1',router)

>>>>>>> a6c4cc47b96054c983047fa4842cc72ee89bdbf7
module.exports = app;