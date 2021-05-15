const { getCoaches } = require('./sparql');
const { CoachService } = require('../CoachService');
const wikidataUrl = 'https://query.wikidata.org/sparql';
const headers = { 'Accept': 'application/sparql-results+json' };
const superAgent = require('superagent');
const fetch = require('node-fetch');

const dict = {}


exports.getCoaches = function(functionCallback) {
    var url = wikidataUrl + '?query=' + encodeURIComponent(getCoaches());
    console.log(url);
    let json = undefined;
    url = 'https://query.wikidata.org/sparql?query=SELECT%20%3FclubLabel%20%3FcoachLabel%0A%09WHERE%20%7B%0A%09%20%20%3Fclub%20wdt%3AP31%20wd%3AQ847017%20.%0A%09%20%20%3Fclub%20wdt%3AP361%20wd%3AQ1386924%20.%0A%09%20%20OPTIONAL%20%7B%20%3Fclub%20wdt%3AP286%20%3Fcoach%20%7D%20.%0A%09%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%2Cnl%22.%7D%0A%09%7D%0A%09ORDER%20BY%20ASC(xsd%3Ainteger(%3Fcoach)%20)';
    fetch(url, { headers }).then(body => {
        body.json().then(data => {
            console.log(data);
            functionCallback(data);
        });
    });


    /*
        superAgent.get('https://query.wikidata.org/sparql?query=SELECT%20%3FclubLabel%20%3FcoachLabel%0A%09WHERE%20%7B%0A%09%20%20%3Fclub%20wdt%3AP31%20wd%3AQ847017%20.%0A%09%20%20%3Fclub%20wdt%3AP361%20wd%3AQ1386924%20.%0A%09%20%20OPTIONAL%20%7B%20%3Fclub%20wdt%3AP286%20%3Fcoach%20%7D%20.%0A%09%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%2Cnl%22.%7D%0A%09%7D%0A%09ORDER%20BY%20ASC(xsd%3Ainteger(%3Fcoach)%20)')
            .set('Accept', 'application/sparql-results+json')
            .set('async', false)
            .end(function(err, res) {
                console.log(res);
                if (res.ok) {
                    // coachSerializerFromWikidata(res, functionCallback);
                    functionCallback(res);
                }
            });*/
}