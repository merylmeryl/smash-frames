const db = require('../database');

class Fighters {
  static retrieveAll(callback) {
    db.query('SELECT * from fighters where id < 119', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static getFighterByName(fighterId, callback) {
    db.query(`SELECT * from fighters where lower(fighter_name) = lower('${fighterId}')`, (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Fighters;