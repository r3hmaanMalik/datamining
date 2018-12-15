const request = require('request');
const cheerio = require('cheerio');
const mysql = require('mysql');
const mongodb = require('mongodb');
// Write Headers
// var val = [];
// var title ,discrp,imglink,newslink;

// var post = {
//     titl: title,
//     Discrip: discrp,
//     iLink: imglink,
//     nLink: newslink
// };


var title,discrp,newslink,imglink, detail;


request('https://scholarshipscorner.website/category/undergraduate-scholarships/', (error, response, html) => {
    if (!error && response.statusCode == 200) {

        const $ = cheerio.load(html);

    //     $('div.widget.wtrending').each((i, el) => {
    //         title = $(el).find('h3').text();
    //         newslink = $(el).find('li > a').attr('href');
    //         // discrp = $(el).find('div.excerpt.entry-summary > p').text();
    //         //imglink = $(el).find(' a > img').attr('src');
    //         console.log("title->" + i + title);
    //         console.log("newslink->" + i + newslink);
    //         // console.log("imglink->" + i + imglink );
    //         //   console.log("Discrip->" + i + discrp );
    //         console.log("----------------------");

    //     });

        // var fdiv = $('div.widget.wtrending').first();
        // var divs = fdiv.find('div').each((i, el) => {
        //     if ($(el).hasClass('titletrend')){
        //     var anid = fdiv.find('div.titletrend > span');
        //     $(anid).find('a').each((i, anc) => {
        //         console.log($(anc).text());
        //     });}
        //     else {
        //         console.log("News" + i);
        //         $(el).find('ul > li').each((x, li) => {
        //         	console.log($(li).text());
        //         });


        //     }
        // });


        



        // console.log(fdiv.find('div.titletrend > span > a').text());









 // $('article.box.story.mb-4.border--bottom.pb-sm-4.pb-2').each((i, el) => {
 //                title = $(el).find('h2 > a').text();
 //                discrp = $(el).find('div.story__excerpt.pb-2.px-2.mt-0').text();
 //                newslink = $(el).find('h2 > a').attr('href');
 //                imglink = $(el).find('div.media__item > a > img').attr('src');

// var MongoClient = require('mongodb').MongoClient,
//     assert = require('assert');

// // Connection URL
// var url = 'mongodb://localhost:27017/';

// // create

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   // var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(post, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });




// Finds
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("dawn").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });



//  $('div.paginated_page.paginated_page_1.active').each((i, el) => {

//             title = $(el).find('h2 > a').text();
//             newslink = $(el).find('h2 > a').attr('href');
//             discrp = $(el).find('div.excerpt.entry-summary > p').text();
//             imglink = $(el).find(' a > img').attr('src');
//             console.log("title->" + i + title );
//             console.log("newslink->" + i + newslink );
//             console.log("imglink->" + i + imglink );
//             console.log("Discrip->" + i + discrp );
//              console.log("----------------------"  );
            
//         });
//     }
// });



///////////////

 $('article').each((i , el) => {
 	
 	title = $(el).find('div.header > a').attr('href');
    imglink = $(el).find('div.header > a > img').attr('src');
 	discrp = $(el).find('div.header > a').attr('title');
 	detail = $(el).find('div.post-content > div.excerpt.entry-summary > p').text();
 	

 	console.log("title->" + i + title );
 	console.log("imglink->" + i + imglink );
    console.log("Discrip->" + i + discrp );
    console.log("Detail->" + i + detail );


 	console.log("----------------------"  );
            





 })

    }
});



//////////////





// console.log("in");

// $('div.paginated_page > div.column').each((i ,el) => {
// 	console.log(i);	
// });




//     }







// });