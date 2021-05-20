const Serializable = require('../wikidata/model/object-serializer');

module.exports = {
    stadiumSerializerFromWikidata: function(repository, data, functionCallback) {
        data.results.bindings.forEach(element => {
            var wikidata = element.stadium.value;
            var name = element.stadiumLabel.value;
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
            repository.addStadium(object, functionCallback);
        });
    }
}