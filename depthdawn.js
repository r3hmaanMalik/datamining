//DETAIL NEWS


const request = require('request');
const cheerio = require('cheerio');
const mongodb = require('mongodb');

var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/';
// Finds
var hoder;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mangoes");
  var detail = dbo.collection("latests").find({}, {
    projection: {
      newslink: 1,
      _id: 1
    }
  }).sort({
    _id: 1
  }).limit(1000);
  var countMe = 0;

  detail.forEach(function(doc) {

    var content = '';
    var title, imglink;
    //PARSING ID'S
    request(doc.newslink, (error, response, html) => {
      if (!error && response.statusCode == 200) {

        const $ = cheerio.load(html);
        ++countMe;
        console.log("+++++++++++++" + countMe + "++++++++++++++++++++++++++");

        title = $('.story__title.size-ten.mt-1.pb-3.border--bottom').find('h2 > a').text();
        $('div.story__content.pt-1.mt-1 > p').each((i, el) => {

          content = content + $(el).text();

        });
        imglink = $('figure.media.media--stretch.col-12.px-0  > div.media__item > img').attr('src');

        var post = {
          id: doc._id,
          title: title,
          content: content,
          ilink: imglink
        }
        dbo.collection("latest_detail").insertOne(post, function(err, res) {
          if (err) throw err;
          console.log("inserted");

        });
      }
    });
  });
});