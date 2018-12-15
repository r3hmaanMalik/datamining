const request = require('request');
const cheerio = require('cheerio');
const mysql = require('mysql');
const mongodb = require('mongodb');
// Write Headers
var title,discrp,newslink,imglink, detail;


request('https://scholarshipscorner.website/lums-nop-scholarship/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        
        title=$('h1.entry-title').text();
        console.log(title);

    $('div.post-content.entry-content').each((i,el) =>
    {
        console.log($(el).text());
    });

    //     imglink=$('div.pic.post_thumb > img').attr('src');
    //      console.log(imglink);

     }

});








// COMMENTED CODE IS HERE
// Write Header

//  var title ,discrp,imglink,newslink;



// // //

// request('https://www.dawn.com/latest-news', (error, response, html) => {
//      if (!error && response.statusCode == 200) {
//          const $ = cheerio.load(html);

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

