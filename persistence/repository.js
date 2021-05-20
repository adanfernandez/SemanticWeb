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
        var query = 'INSERT INTO `tcoach`(`name`, `initial_date`, `final_date`, `semantic`)' + ` VALUES ('${coach.name}','${coach.dateStart}','${coach.dateEnd}','${coach.wikidata}')`;
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    /**
     * Add stadium to database
     * @param {*} stadium 
     * @param {*} functionCallback 
     */
    addStadium: function(stadium, functionCallback) {
        var query = 'INSERT INTO `tstadium`(`name`, `initial_date`, `final_date`, `semantic`)' + ` VALUES ('${stadium.name}','${stadium.dateStart}','${stadium.dateEnd}','${stadium.wikidata}')`;
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    /**
     * Add stadium to database
     * @param {*} chief 
     * @param {*} functionCallback 
     */
    addChief: function(chief, functionCallback) {
        var query = 'INSERT INTO `tchiefs`(`name`, `initial_date`, `final_date`, `semantic`)' + ` VALUES ('${chief.name}','${chief.dateStart}','${chief.dateEnd}','${chief.wikidata}')`;
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    /**
     * Get coaches obtained from wikidata with their titles order by name
     * @param {*} functionCallback 
     */
    getTitlesByCoachOrderByCoachName: function(functionCallback) {
        var query = 'Select tcoach.semantic as coach, tcoach.name as coachname, ttitle.semantic as title, ttitle.name as titlename, thistorictitle.date from tcoach,ttitle,thistorictitle where thistorictitle.id_title = ttitle.id and thistorictitle.date <= tcoach.final_date and thistorictitle.date >= tcoach.initial_date ORDER BY tcoach.name';
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
        var query = 'Select tcoach.semantic as coach, tcoach.name as coachname, ttitle.semantic as title, ttitle.name as titlename, thistorictitle.date from tcoach,ttitle,thistorictitle where thistorictitle.id_title = ttitle.id and thistorictitle.date <= tcoach.final_date and thistorictitle.date >= tcoach.initial_date ORDER BY thistorictitle.date';
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    getTitlesByStadiumOrderByStadiumName: function(functionCallback) {
        var query = 'Select tstadium.semantic as stadium, tstadium.name as stadiumname, ttitle.semantic as title, ttitle.name as titlename, thistorictitle.date from tstadium, ttitle, thistorictitle where thistorictitle.id_title = ttitle.id and thistorictitle.date <= tstadium.final_date and thistorictitle.date >= tstadium.initial_date ORDER BY tstadium.name';
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    getTitlesByStadium: function(functionCallback) {
        var query = 'Select tstadium.semantic as stadium, tstadium.name as stadiumname, ttitle.semantic as title, ttitle.name as titlename, thistorictitle.date from tstadium, ttitle, thistorictitle where thistorictitle.id_title = ttitle.id and thistorictitle.date <= tstadium.final_date and thistorictitle.date >= tstadium.initial_date ORDER BY thistorictitle.date';
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    getTitlesByChiefOrderByChiefName: function(functionCallback) {
        var query = 'Select tchiefs.semantic as chief, tchiefs.name as chiefname, ttitle.semantic as title, ttitle.name as titlename, thistorictitle.date from tchiefs,ttitle,thistorictitle where thistorictitle.id_title = ttitle.id and thistorictitle.date <= tchiefs.final_date and thistorictitle.date >= tchiefs.initial_date ORDER BY tchiefs.name';
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    getTitlesByChief: function(functionCallback) {
        var query = 'Select tchiefs.semantic as chief, tchiefs.name as chiefname, ttitle.semantic as title, ttitle.name as titlename, thistorictitle.date from tchiefs,ttitle,thistorictitle where thistorictitle.id_title = ttitle.id and thistorictitle.date <= tchiefs.final_date and thistorictitle.date >= tchiefs.initial_date ORDER BY thistorictitle.date';
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },

    truncateTable: function(table, functionCallback) {
        var query = `TRUNCATE ${table}`;
        this.connection.query(query, (err, result) => {
            if (err) {
                functionCallback(null);
            } else {
                functionCallback(result);
            }
        });
    },
};