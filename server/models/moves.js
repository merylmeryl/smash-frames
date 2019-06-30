const db = require('../database');

class Moves {
  static retrieveAll(callback) {
    db.query('SELECT * from moves', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static getMovesByFighter(fighterId, callback) {
    db.query(`SELECT * from moves where fighter_id=${fighterId}`, (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Moves;