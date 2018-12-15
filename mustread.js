
//MUST READ SECTION

const request = require('request');
const cheerio = require('cheerio');
const mongodb = require('mongodb');

var title ,discrp,imglink,newslink;


request('https://www.dawn.com/must-read', (error, response, html) => {
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

        $('article.box.story.mb-4.border--bottom.pb-sm-4.pb-2').each((i, el) => {

            title = $(el).find('h2 > a').text();
            newslink = $(el).find('h2 > a').attr('href');
            discrp = $(el).find('div.story__excerpt.pb-2.px-2.mt-0').text();
            imglink = $(el).find('div.media__item > a > img').attr('src');

           var post = {
                    title: title,
                    discription: discrp,
                    newslink: newslink,
                    ilink: imglink
                }
                dbo.collection("mustread").insertOne(post, function(err, res) {
                    if (err) throw err;
                    console.log(i + "inserted");
                    
                });
            });
            db.close();
        });
    }
});