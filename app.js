var request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const cheerio = require('cheerio')

var url = "https://rawgit.com/alexandretok/scraping-javascript-websites/master/dummy.html";

request({uri:url},function (error, response, page) {
    if (!error && response.statusCode == 200) {
        JSDOM.fromURL("https://www.americanas.com.br/categoria/alimentos-e-bebidas/vinhos?ordenacao=bestSellers&origem=omega", {runScripts: "dangerously", pretendToBeVisual: true, resources: "usable"}).then(dom => {
            console.log("DOM Created. Waiting a while for JavaScript code to run...");
            setTimeout(() => {
                // Parsing DOM with cheerio for easier extraction
                const $ = cheerio.load(dom.serialize());

                console.log($('li').text());
            }, 1000);
        });
    }
});
