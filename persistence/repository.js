module.exports = {
    connection: null,
    init: function(connection) {
        this.connection = connection;
    },

    /**
     * Delete database
     * @param functionCallback
     */
    deleteDB: function(functionCallback) {
        //Consulta
        var query = "DELETE FROM tcoach; DELETE FROM tcoach_title; DELETE FROM ttitle";
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    /**
     * Add coach to database
     * @param {*} coach 
     * @param {*} functionCallback 
     */
    addCoach: function(coach, functionCallback) {
        var query = 'INSERT INTO `tcoach`(`name`, `initial_date`, `final_date`)' + ` VALUES ('${coach.name}','${coach.dateStart}','${coach.dateEnd}')`;
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    /**
     * Get coaches obtained from wikidata with their titles 
     * @param {*} functionCallback 
     */
    getTitlesByCoach: function(functionCallback) {
        var query = 'Select tcoach.name, ttitle.name, thistorictitle.date from tcoach,ttitle, thistorictitle where thistorictitle.id_title = ttitle.id and thistorictitle.date <= tcoach.final_date and thistorictitle.date >= tcoach.initial_date ORDER BY thistorictitle.date';
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

};