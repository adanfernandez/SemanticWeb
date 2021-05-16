exports.getChiefs = getChiefs;
exports.getCoaches = getCoaches;
exports.getStadiums = getStadiums;


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
    return `SELECT ?coach ?coachLabel ?dateStart ?dateEnd
	WHERE {
	  OPTIONAL { wd:Q15789 p:P286 ?trainer } .
      ?trainer ps:P286 ?coach .
      ?trainer pq:P580 ?dateStart .
      ?trainer pq:P582 ?dateEnd .   
	  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,nl".}
	}
	ORDER BY ASC(?dateStart)`;
};

function getStadiums() {
    return `SELECT ?stadium ?stadiumLabel
	WHERE {
	  OPTIONAL { wd:Q15789 p:P115 ?venue } .
      ?venue ps:P115 ?stadium .
	  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,nl".}
	}
	ORDER BY ASC(xsd:integer(?stadium) )`;
}