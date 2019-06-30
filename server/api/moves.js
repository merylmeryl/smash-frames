var express = require('express');
var Moves = require('../models/moves');

var router = express.Router();

router.get('/', (req, res) => {
  Moves.retrieveAll((err, moves) => {
    if (err)
      return res.json(err);
    return res.json(fighters);
  });
});

router.get('/fighter/:fighterId', (req, res) => {
  Moves.getMovesByFighter(req.params.fighterId, (err, moves) => {
    if (err)
      return res.json(err);
    return res.json(moves);
  });
});

module.exports = router;