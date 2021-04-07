const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

router.get("/delete/:id", function(req, res) {
    Post.destroy({where: {
        id: req.params.id
    }})
    .then(function() {
        res.redirect("/list");
    })
    .catch(function(error) {
        res.send("Erro ao tentar excluir!" + error);
    })
});

module.exports = router;

