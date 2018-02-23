var request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const cheerio = require('cheerio')

var url = "https://www.americanas.com.br/categoria/alimentos-e-bebidas/vinhos?ordenacao=bestSellers&origem=omega";

var req = {uri:url};

request(req,function (error, response, page) {
    if (!error && response.statusCode == 200) {
        JSDOM.fromURL("https://www.americanas.com.br/categoria/alimentos-e-bebidas/vinhos?ordenacao=bestSellers&origem=omega", {runScripts: "dangerously", pretendToBeVisual: true, resources: "usable"}).then(dom => {
            console.log("Pagina recebida.");

            // Timeout para dar tempo do JavaScript executar
            setTimeout(() => {
                console.log("Criando DOM");

                const $ = cheerio.load(dom.serialize());

                $('body .szr-39 .sz .mmn-itm-link').each(function(index, item){
                    console.log($(this).text().replace(/^(\s+)|(\s+)$/g, '').replace(/(\s{2,})/g, ' ').replace(' Novo', ''));
                });                
            }, 5000);
        });
    }
});
