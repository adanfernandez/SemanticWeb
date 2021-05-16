const { getCoaches } = require('./sparql');
const { getChiefs } = require('./sparql');
const { getStadiums } = require('./sparql');



const { coachSerializerFromWikidata } = require('../CoachService');
const { stadiumSerializerFromWikidata } = require('../StadiumService');
const wikidataUrl = 'https://query.wikidata.org/sparql';
const headers = { 'Accept': 'application/sparql-results+json' };
const fetch = require('node-fetch');

const dict = {}


exports.getCoaches = function(functionCallback) {
    var url = wikidataUrl + '?query=' + encodeURIComponent(getCoaches());

    console.log("URL: " + url);

    fetch(url, { headers }).then(body => {
        body.json().then(data => {
            coachSerializerFromWikidata(data, functionCallback);
        });
    });
}

exports.getStadiums = function(functionCallback) {
    var url = wikidataUrl + '?query=' + encodeURIComponent(getStadiums());

    console.log("URL: " + url);

    fetch(url, { headers }).then(body => {
        body.json().then(data => {
            stadiumSerializerFromWikidata(data, functionCallback);
        });
    });
}