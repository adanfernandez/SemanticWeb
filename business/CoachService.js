const Serializable = require('./wikidata/model/object-serializer');
const repository = require("../persistence/repository");
const dbConnection = require('../persistence/connection');


module.exports = {
    coachSerializerFromWikidata: function(data, functionCallback) {
        data.results.bindings.forEach(element => {

            var name = element.coachLabel.value;
            var dateStart = element.dateStart.value;
            var dateEnd = element.dateEnd.value;

            var object = new Serializable(name, dateStart, dateEnd);

            repository.init(dbConnection());
            repository.addCoach(object, functionCallback);
        });
    }
}