const rdf = require('rdf');
const { NamedNode, BlankNode, Literal } = rdf;
const Model = require('./model');

// Database
const repository = require("../../persistence/repository");
const dbConnection = require('../../persistence/connection');

module.exports = {
    getTitlesByCoach: function(functionCallback) {
        const dict = {};
        repository.init(dbConnection());
        repository.getTitlesByCoach(result => {
            const triples = [];
            Array.from(result).forEach(resultado => {
                const coach = resultado['coach'];
                const coachname = resultado['coachname'];

                const title = resultado['title'];
                const titlename = resultado['titlename'];

                const date = resultado['date'];

                const predicate = 'https://www.wikidata.org/wiki/Q18560095';
                const turtle = `<${coach}> <${predicate}> <${title}> .`;

                const model = new Model(coachname, titlename, date, rdf.TurtleParser.parse(turtle).graph.toArray().join("\n"));

                triples.push(model);
            });
            functionCallback(triples);
        });
    }
}