const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();

const Post = require('../models/Post');

/*
* Acessar o arquivo 'edit' que está na pasta de views
* http://localhost:3000/edit/:id vai renderizar a pagina e buscar o post
*/

router.get('/edit/:id', function (req, res, next) {
    Post.findByPk(req.params.id)
    .then((post) => {
        res.render('edit', {
            title: "Edit Form",
            id: req.params.id,
            name: post.name,
            phone: post.phone,
            dateBirthday: post.dateBirthday,
            gender: post.gender,
            email: post.email,
        });
    })
    .catch((error) => {
        res.send("Erro ao localizar postagem!" + error)
    })
});

/*
* Acessara rota /edition/:id para realizar update do post
*/

router.post('/edition/:id', function (req, res, next) {
    Post.update({ 
        name: req.body.name,
        phone: req.body.phone,
        dateBirthday: req.body.dateBirthday,
        gender: req.body.gender,
        email: req.body.email
    },
        { where: { id: req.params.id }, }
    )
        .then(function () {
            console.log('Update succcessful!');
            res.redirect("/list");
        }).catch(function () {
            res.send("Error in scription. Error: " + error);
        })
});

module.exports = router;