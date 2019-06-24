const db = require('../database');

class Fighters {
  static retrieveAll(callback) {
    db.query('SELECT fighter_name from fighters', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert(fighter, callback) {
    db.query('INSERT INTO fighters (fighter_name) VALUES ($1)', [fighter], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Fighters;