//STUDENTS PART

const request = require('request');
const cheerio = require('cheerio');
const mongodb = require('mongodb');
// Write Headers

var title, discrp, newslink, imglink;


request('https://scholarshipscorner.website/category/undergraduate-scholarships/', (error, response, html) => {
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

      $('article').each((i, el) => {

        newslink = $(el).find('div.header > a').attr('href');
        imglink = $(el).find('div.header > a > img').attr('src');
        title = $(el).find('div.header > a').attr('title');
        discrp = $(el).find('div.post-content > div.excerpt.entry-summary > p').text();


        var post = {
          title: title,
          discription: discrp,
          newslink: newslink,
          ilink: imglink
        }
        dbo.collection("students").insertOne(post, function(err, res) {
          if (err) throw err;
          console.log(i + "inserted");
        });
      });
      db.close();
    });
  }
});