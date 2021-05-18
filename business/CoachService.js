const Serializable = require('./wikidata/model/object-serializer');



module.exports = {
    coachSerializerFromWikidata: function(repository, data, functionCallback) {
        data.results.bindings.forEach(element => {

            var wikidata = element.coach.value;
            var name = element.coachLabel.value;
            var dateStart = null;
            var dateEnd = null;


            if (element.dateStart) {
                var dateEnd = element.dateStart.value;
            }

            if (element.dateEnd) {
                var dateEnd = element.dateEnd.value;
            }

            var object = new Serializable(wikidata, name, dateStart, dateEnd);

            repository.addCoach(object, functionCallback);
        });
    }
}