const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();

const Post = require('../models/Post');

/*
* Acessar o arquivo 'add' que está na pasta de views
* http://localhost:3000/form vai renderizar a pagina
*/

router.get('/form', function(req, res, next){
    res.render('add', { title: "Inscription Form" })
});

/*
* Acessara rota add para realizar cadastro
*/

router.post('/add', function(req, res, next) {
    Post.create({
        name: req.body.name,
        phone: req.body.phone,
        dateBirthday: req.body.dateBirthday,
        gender: req.body.gender,
        email: req.body.email,      
    })
    .then(function() {
        console.log('Inscription saved!');
        res.redirect("/list");
    }).catch(function(){
        res.send("Error in scription. Error: " + error);
    })
});

module.exports = router;