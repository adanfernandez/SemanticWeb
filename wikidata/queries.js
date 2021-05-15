const { getChiefs } = require('./sparql');
const wikidataUrl = 'https://query.wikidata.org/sparql';
const dict = {}


exports.getChiefs = function(funcionCallback) {
    return getChiefs();
}