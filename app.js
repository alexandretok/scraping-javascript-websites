var request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const cheerio = require('cheerio')

JSDOM.fromURL("https://rawgit.com/alexandretok/scraping-javascript-websites/master/dummy.html", {runScripts: "dangerously", pretendToBeVisual: true, resources: "usable"}).then(dom => {
    console.log("DOM Created. Waiting a while for JavaScript code to run...");
    setTimeout(() => {
        // Parsing DOM with cheerio for easier extraction
        const $ = cheerio.load(dom.serialize());
        console.log($('li').text());
    }, 500);
});
