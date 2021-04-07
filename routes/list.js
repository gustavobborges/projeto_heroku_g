const express = require('express');
const router = express.Router();

var Post = require('../models/Post');

router.get('/list', function (req, res, next) {
    Post.findAll({ order: [["id", "DESC"]] })
    .then(function (posts) {
        res.render('list', { title: "Listagem de Inscrições", posts: posts });
        console.log(posts);
    })
});

module.exports = router;