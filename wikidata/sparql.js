exports.getChiefs = getChiefs;

function getChiefs() {
    return `SELECT ?clubLabel  ?presidentLabel
	WHERE {
	  ?club wdt:P31 wd:Q847017 .
	  ?club wdt:P361 wd:Q1386924 .
	  ?club wdt:P488 ?president .
	  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en".}
	} order by ?presidentLabel`;
}