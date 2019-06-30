const db = require('../database');

class Fighters {
  static retrieveAll(callback) {
    db.query('SELECT * from fighters', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Fighters;