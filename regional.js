//REGIONAL NEWS


const request = require('request');
const cheerio = require('cheerio');
const mongodb = require('mongodb');
// Write Header
var title ,newslink;

request('https://nation.com.pk/', (error, response, html) => {
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

         var fdiv = $('div.widget.wtrending').first();
         var divs = fdiv.find('div').each((i, el) => {
             if ($(el).hasClass('titletrend')){
             var anid = fdiv.find('div.titletrend > span');
             $(anid).find('a').each((i, anc) => {
                console.log($(anc).text());
             });
         }
             else {
                 console.log("News" + i);
                 $(el).find('ul > li > a ').each((x, li) => {
                 console.log(title=$(li).text());
                 console.log(newslink=$(li).attr('href'));
                  var post = {
                    title: title,
                    newslink: newslink
                }
                dbo.collection("regional").insertOne(post, function(err, res) {
                    if (err) throw err;
                    console.log(i + "inserted");
                    
                });

                 });
                 
                
            }
        });
         db.close();
     });

     }

 });

