exports.getChiefs = getChiefs;
exports.getCoaches = getCoaches;
exports.getStadiums = getStadiums;


function getChiefs() {
    return `SELECT ?chief ?chiefLabel ?dateStart ?dateEnd
	WHERE {
	  OPTIONAL { wd:Q15789 p:P169 ?chiefaux } .
      ?chiefaux ps:P169 ?chief .
      OPTIONAL { ?chiefaux pq:P580 ?dateStart }.
      OPTIONAL { ?chiefaux pq:P582 ?dateEnd }.   
	  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,nl".}
	}
	ORDER BY ASC(?dateStart)`;
};


function getCoaches() {
    return `SELECT ?coach ?coachLabel ?dateStart ?dateEnd
	WHERE {
	  	OPTIONAL { wd:Q15789 p:P286 ?trainer } .
      	?trainer ps:P286 ?coach .
      	OPTIONAL { ?trainer pq:P580 ?dateStart } .
		OPTIONAL {?trainer pq:P582 ?dateEnd } .   
	  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,nl".}
	}
	ORDER BY ASC(?dateStart)`;
};

function getStadiums() {
    return `SELECT ?stadium ?stadiumLabel ?dateStart ?dateEnd
	WHERE {
	  OPTIONAL { wd:Q15789 p:P115 ?venue } .
      ?venue ps:P115 ?stadium .
      OPTIONAL { ?venue pq:P580 ?dateStart }.
      OPTIONAL { ?venue pq:P582 ?dateEnd }.   
	  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,nl".}
	}
	ORDER BY ASC(?dateStart)`;
}