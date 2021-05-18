  module.exports = class Serializable {
      constructor(wikidata, name, dateStart, dateEnd) {
          this.wikidata = wikidata;
          this.name = name;
          this.dateStart = dateStart;
          this.dateEnd = dateEnd;
      }
  };