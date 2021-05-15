odule.exports = {
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
        var query = "DELETE FROM tpresident";

        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    }
};