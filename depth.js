const request = require('request');
const cheerio = require('cheerio');
const mysql = require('mysql');
const mongodb = require('mongodb');
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
    var shoda = dbo.collection("test").find({}, {
        projection: {
            newslink: 1,
            _id: 1
        }
    }).sort({
        _id: 1
    }).limit(1000);
    var countMe =0;






    shoda.forEach(function(doc) {

        /////looop 200 IDs

        // console.log(doc.newslink);
        var content ='';
        var title,imglink;
        


        ///// pasing 200 ids
        request(doc.newslink, (error, response, html) => {
            if (!error && response.statusCode == 200) {

                const $ = cheerio.load(html);
                ++countMe;
                console.log("+++++++++++++"+ countMe +"++++++++++++++++++++++++++");
                
                title = $('.story__title.size-ten.mt-1.pb-3.border--bottom').find('h2 > a').text();
                

                // console.log(title);
                // console.log("+++++++++++++++++++++++++++++++++++++++");

                $('div.story__content.pt-1.mt-1 > p').each((i, el) => {
                    
                  content = content + $(el).text();

                });

                // console.log(content);

                imglink = $('figure.media.media--stretch.col-12.px-0  > div.media__item > img').attr('src');
                // console.log(imglink);

                var post = {
                    id: doc._id,
                    Title: title,
                    Content: content,
                    ilink: imglink
                }
                dbo.collection("testdetail").insertOne(post, function(err, res) {
                    if (err) throw err;
                    console.log("inserted");
                    
                });
            }
        });
    });
});