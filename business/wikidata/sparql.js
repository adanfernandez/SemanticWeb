exports.getChiefs = getChiefs;
exports.getCoaches = getCoaches;

function getChiefs() {
    return `SELECT ?clubLabel  ?presidentLabel
	WHERE {
	  ?club wdt:P31 wd:Q847017 .
	  ?club wdt:P361 wd:Q1386924 .
	  ?club wdt:P488 ?president .
	  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en".}
	} order by ?presidentLabel`;
};


function getCoaches() {
    return `SELECT ?clubLabel ?coachLabel
	WHERE {
	  ?club wdt:P31 wd:Q847017 .
	  ?club wdt:P361 wd:Q1386924 .
	  OPTIONAL { ?club wdt:P286 ?coach } .
	  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,nl".}
	}
	ORDER BY ASC(xsd:integer(?coach) )`;
};