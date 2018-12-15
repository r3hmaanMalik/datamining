const request = require('request');
const cheerio = require('cheerio');
const mongodb = require('mongodb');
var objId = require('mongodb').ObjectId; 
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
//                //      Connection URL
var url = 'mongodb://localhost:27017/';

// Finds
var hoder;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    var getIDs = dbo.collection("dawn").find({}, {
        projection: {
            newslink: 1,
            _id: 1
        }
    }).sort({
        _id: 1
    }).limit(1);

    var countMe =0;
    
    getIDs.forEach(function(doc) {
        console.log(doc._id);

        var getDetail = dbo.collection("detail").find({"id":doc._id}, {
        projection: {
            Title: 1,
            id: 1
        }
        }).sort({
            _id: 1
        }).limit(1);

        getDetail.forEach(function (obj) {

            // body...
            console.log(obj.Title);
        });

        
    });
});