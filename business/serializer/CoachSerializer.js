const Serializable = require('../wikidata/model/object-serializer');
/*
// Database
const repository = require("./persistence/repository");
const dbConnection = require('./persistence/connection');*/


module.exports = {
    coachSerializerFromWikidata: function(repository, data, functionCallback) {
        data.results.bindings.forEach(element => {

            var wikidata = element.coach.value;
            var name = element.coachLabel.value;
            var dateStart = null;
            var dateEnd = null;


            if (element.dateStart) {
                var dateStart = element.dateStart.value;
            }

            if (element.dateEnd) {
                var dateEnd = element.dateEnd.value;
            } else {
                var dateEnd = new Date().toISOString().slice(0, 10);
            }

            var object = new Serializable(wikidata, name, dateStart, dateEnd);

            repository.addCoach(object, functionCallback);
        });
    }
}