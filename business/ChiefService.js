const Serializable = require('./wikidata/model/object-serializer');

module.exports = {
    chiefSerializerFromWikidata: function(repository, data, functionCallback) {
        data.results.bindings.forEach(element => {
            var name = element.chiefLabel.value;
            var dateStart = null;
            var dateEnd = null;
            if (element.dateStart) {
                var dateStart = element.dateStart.value;
            }
            if (element.dateEnd) {
                var dateEnd = element.dateEnd.value;
            }
            var object = new Serializable(name, dateStart, dateEnd);
            repository.addChief(object, functionCallback);
        });
    }
}