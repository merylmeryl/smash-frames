const db = require('../database');

class Moves {
  static retrieveAll(callback) {
    db.query('SELECT * from moves order by id', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  // static getMoveById(moveId, callback) {
  //   db.query(`SELECT * from moves where id=${moveId}`, (err, res) => {
  //     if (err.error)
  //       return callback(err);
  //     callback(res);
  //   });
  // }

  static getMovesByFighter(fighterId, callback) {
    db.query(`SELECT * from moves where fighter_id=${fighterId} order by moves.id`, (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

}

module.exports = Moves;