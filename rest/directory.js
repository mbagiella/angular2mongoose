var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('./user');

mongoose.connect('mongodb://localhost/directory', function (error) {
    if (error) {
        console.log(error);
    }
});

router.get('/user/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, docs) {
        res.json({'data' : docs});
    });
});

router.get('/user', function(req, res, next) {
    User.find({}, function (err, docs) {
        res.json({'data' : docs});
    });
});

router.put('/user/:id',function(req,res){
    User.findByIdAndUpdate(
        req.params.id,
        {name:req.body.name,surname:req.body.surname})
        .then(function(docs){
            res.json({'data' : docs});
        })
        .catch(function(err){
            res.status(404).json({error:err});
        });
});

router.post('/user',function(req,res){
    var user = new User();
    user.name= req.body.name;
    user.surname= req.body.surname;
    user.save()
        .then(function(x){
            console.log(x);
            res.json({'data' : user});
        })
        .catch(function(err){
            res.status(404).json({error:err});
        })
})

router.delete('/user/:id',function(req,res){
    User.findByIdAndRemove(req.params.id)
        .then(function(){
            res.json({message: 'user deleted!'});
        })
        .catch(function(err){
            res.status(404).json({error:err});
        });
})

module.exports = router;