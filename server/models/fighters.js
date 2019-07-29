const db = require('../database');

class Fighters {
  static retrieveAll(callback) {
    db.query('SELECT * from fighters where id < 119', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Fighters;