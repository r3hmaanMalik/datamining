const request = require('request');
const cheerio = require('cheerio');
const mysql = require('mysql');
const mongodb = require('mongodb');
// Write Header

var title ,discrp,imglink,newslink;

request('https://dunyanews.tv/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var MongoClient = require('mongodb').MongoClient,
            assert = require('assert');
        // Connection URL
        var url = 'mongodb://localhost:27017/';

        // Creations

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            $('div.edwn_inner').each((i, el) => {
                 title = $(el).find('h2 > a').text();
                 newslink = $(el).find('h2 > a').attr('href');
                 discrp = $(el).find('div.edwn_desc > p').text();
                 imglink = $(el).find('figure > a > img').attr('src');
                 
                var post = {
                    Title: title,
                    Discription: discrp,
                    newslink: newslink,
                    ilink: imglink
                }
                dbo.collection("dawn").insertOne(post, function(err, res) {
                    if (err) throw err;
                    console.log(i + "inserted");
                });
            });
            db.close();
        });
    }
});
