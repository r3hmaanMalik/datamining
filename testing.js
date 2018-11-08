const request = require('request');
const cheerio = require('cheerio');
const mysql = require('mysql');
const mongodb = require('mongodb');
// Write Headers

//var title ,discrp,imglink,newslink;


var title,discrp,newslink,imglink, detail;


request('https://www.dawn.com/news/1443971/ppp-says-government-ought-to-take-strict-action-against-tlp', (error, response, html) => {
    if (!error && response.statusCode == 200) {

        const $ = cheerio.load(html);
        title=$('.story__title.size-ten.mt-1.pb-3.border--bottom').find('h2 > a').text();
        console.log(title);

$('div.story__content.pt-1.mt-1 > p').each((i,el) =>
    {
        console.log($(el).text());
    });

imglink=$('figure.media.media--stretch.col-12.px-0  > div.media__item > img').attr('src');
console.log(imglink);
        // $('.story__title.size-ten.mt-1.pb-3.border--bottom').each((i, el) => {
        //     title = $(el).find('h2>a').text();
        //     //newslink = $(el).find('li > a').attr('href');
        //     discrp = $(el).find('div.story__content.pt-1.mt-1 > p').text();
        //     imglink = $(el).find(' figure.media.media--stretch.col-12.px-0   > div.media__item > img').attr('src');
        //     console.log("title->" + i + title);
        //   //  console.log("newslink->" + i + newslink);
        //      console.log("imglink->" + i + imglink );
        //       console.log("Discrip->" + i + discrp );
        //     console.log("----------------------");

        // });

    }

});
