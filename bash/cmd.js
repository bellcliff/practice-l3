#!/usr/bin/env node

var parse = require('./parse');
var db = require('./db');

parse.parseDir(__dirname + '/data')
    .then(db.saveInterviews)
    .then(function() {
        return db.dbConn.then(function(db){
            return db.close();
        });
    })
    .catch(console.log);
