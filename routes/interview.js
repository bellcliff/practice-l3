var router = require('express').Router();
var mongodb = require('mongodb').MongoClient.connect('mongodb://localhost/l3');
var moment = require('moment');
var _ = require('lodash');

router.get('/', function(req, res, next) {
    var page = req.query.page || 0;
    var size = req.query.size || 10;
    mongodb.then(function(db) {
        return db.collection('interview')
            .find().sort({Date: -1})
            .skip(page*size).limit(size).toArray();
    })
    .then(function(its){
        return _.each(its, it=>{it.Date=moment(it.Date).format('MM/DD/YYYY')});
    })
    .then(res.json.bind(res)).catch(next);
});

module.exports = router;
