const request = require('request');
const cheerio = require('cheerio');
const mysql = require('mysql');
const mongodb = require('mongodb');
var objId = require('mongodb').ObjectId; 
// Write Header

//  var title ,discrp,imglink,newslink;



// // //

// request('https://www.dawn.com/latest-news', (error, response, html) => {
//      if (!error && response.statusCode == 200) {
//          const $ = cheerio.load(html);
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
//                //      Connection URL
var url = 'mongodb://localhost:27017/';

// //         // Creations

//  MongoClient.connect(url, function(err, db) {
//              if (err) throw err;
//             var dbo = db.db("mydb");
//             $('article.box.story.mb-2.border--bottom.pb-2').each((i, el) => {
//                 title = $(el).find('a.story__link').text();
//                 discrp = $(el).find('div.story__excerpt').text();
//                 newslink = $(el).find('div.media__item > a').attr('href');
//                 imglink = $(el).find('div.media__item > a > img').attr('src');


//                 var post = {
//                     Title: title,
//                     Discription: discrp,
//                     newslink: newslink,
//                     ilink: imglink
//                 }
//                 dbo.collection("dawn").insertOne(post, function(err, res) {
//                     if (err) throw err;
//                     console.log(i + "inserted");

//                 });
//             });
//             db.close();
//         });
//     }
// });




// Finds
var hoder;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    // dbo.collection("dawn").find({}, {Title:1, _id:0}).toArray(function(err, result) {
    //   if (err) throw err;{
    //   console.log(result);
    //   db.close();}
    // });

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
        // console.log(doc.newslink);  
        // var o_id = new objId(doc.id);
        // console.log(o_id);

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