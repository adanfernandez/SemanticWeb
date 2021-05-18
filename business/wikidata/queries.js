// Queries
const { getCoaches } = require('./sparql');
const { getChiefs } = require('./sparql');
const { getStadiums } = require('./sparql');

// Serializers
const { coachSerializerFromWikidata } = require('../serializer/CoachSerializer');
const { stadiumSerializerFromWikidata } = require('../serializer/StadiumSerializer');
const { chiefSerializerFromWikidata } = require('../serializer/ChiefSerializer');


// Request
const wikidataUrl = 'https://query.wikidata.org/sparql';
const headers = { 'Accept': 'application/sparql-results+json' };
const fetch = require('node-fetch');

exports.getCoaches = function(repository, functionCallback) {
    var url = wikidataUrl + '?query=' + encodeURIComponent(getCoaches());
    fetch(url, { headers }).then(body => {
        body.json().then(data => {
            coachSerializerFromWikidata(repository, data, functionCallback);
        });
    });
}

exports.getStadiums = function(repository, functionCallback) {
    var url = wikidataUrl + '?query=' + encodeURIComponent(getStadiums());
    fetch(url, { headers }).then(body => {
        body.json().then(data => {
            stadiumSerializerFromWikidata(repository, data, functionCallback);
        });
    });
}


exports.getChiefs = function(repository, functionCallback) {
    var url = wikidataUrl + '?query=' + encodeURIComponent(getChiefs());
    fetch(url, { headers }).then(body => {
        body.json().then(data => {
            chiefSerializerFromWikidata(repository, data, functionCallback);
        });
    });
}