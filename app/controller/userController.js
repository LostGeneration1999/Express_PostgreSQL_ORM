'use strict'

const dbUserModels = require('../models/');

let userController = {

    createUser: function (req, res, next) {
        dbUserModels.user.create({
            firstName: req.body.first,
            lastName: req.body.last,
            email: req.body.email
        }).then(user => {
            console.log('ユーザーが正常に追加されました');
            res.redirect('/users');
        })
    },

    showUsers: function (req, res, next) {
        dbUserModels.user.findAll().then( userData => {
            if(!userData){
                console.log('Not exist user');
            }
            else{
                console.log('Exist user');
                console.log(userData);
                res.render('user', {userData: userData})
            }
        })
    }
}

module.exports = userController;