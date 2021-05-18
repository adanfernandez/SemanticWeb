const rdf = require('rdf');
const { NamedNode, BlankNode, Literal } = rdf;
const Model = require('./model');

// Database
const repository = require("../../persistence/repository");
const dbConnection = require('../../persistence/connection');

module.exports = {
    getTitlesByCoach: function(functionCallback) {
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
    },

    getTitlesByStadium: function(functionCallback) {
        repository.init(dbConnection());
        repository.getTitlesByStadium(result => {
            const triples = [];
            Array.from(result).forEach(resultado => {
                const stadium = resultado['stadium'];
                const stadiumname = resultado['stadiumname'];

                const title = resultado['title'];
                const titlename = resultado['titlename'];

                const date = resultado['date'];

                const predicate = 'https://www.wikidata.org/wiki/Q18560095';
                const turtle = `<${stadium}> <${predicate}> <${title}> .`;

                const model = new Model(stadiumname, titlename, date, rdf.TurtleParser.parse(turtle).graph.toArray().join("\n"));

                triples.push(model);
            });
            functionCallback(triples);
        });
    },

    getTitlesByChief: function(functionCallback) {
        repository.init(dbConnection());
        repository.getTitlesByChief(result => {
            const triples = [];
            Array.from(result).forEach(resultado => {
                const chief = resultado['chief'];
                const chiefname = resultado['chiefname'];

                const title = resultado['title'];
                const titlename = resultado['titlename'];

                const date = resultado['date'];

                const predicate = 'https://www.wikidata.org/wiki/Q18560095';
                const turtle = `<${chief}> <${predicate}> <${title}> .`;

                const model = new Model(chiefname, titlename, date, rdf.TurtleParser.parse(turtle).graph.toArray().join("\n"));

                triples.push(model);
            });
            functionCallback(triples);
        });
    }
}