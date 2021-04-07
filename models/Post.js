const db = require('./db');

const Post = db.sequelize.define("post", {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },

    phone: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },

    dateBirthday: {
        type: db.Sequelize.DATEONLY,
        allowNull: false,
    },

    gender: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },

});

module.exports = Post;


//Comando para criar novos campos nas tabelas
// Post.sync({ update: true });

//Comando p recriar estrutra de tabelas no banco
// Post.sync({ force:true });