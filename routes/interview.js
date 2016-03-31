var router = require('express').Router();
var mongodb = require('mongodb').MongoClient.connect('mongodb://localhost/l2');

router.get('/', function(req, res, next) {
    mongodb.then(function(db) {
        return db.collection('interview').find().toArray();
    }).then(res.json.bind(res)).catch(next);
});

module.exports = router;
