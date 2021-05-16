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
     * 
     * @param {*} functionCallback 
     */
    getTitlesByCoach: function(functionCallback) {

    }

};