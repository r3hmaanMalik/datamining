const request = require('request');
const cheerio = require('cheerio');
const mongodb = require('mongodb');
// Write Header
// Write Header
var title, imglink, newslink;

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
      var dbo = db.db("mangoes");

      $('div.detl_feturezz').find('a').each(function(i, elem) {
        if (!$(this).text()) {
          console.log(imglink = $(this).find('img').attr('src'));
        } else {
          console.log(title = $(this).text());
          console.log(newslink = $(this).attr('href'));
          console.log('--------------');
          var post = {
            title: title,
            newslink: newslink,
            ilink: imglink
          }
          dbo.collection("trending").insertOne(post, function(err, res) {
            if (err) throw err;
            console.log(i + "inserted");

          });

        }
      });
      db.close();
    });
  }
});