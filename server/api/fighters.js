var express = require('express');
var Fighters = require('../models/fighters');

var router = express.Router();

router.get('/', (req, res) => {
  Fighters.retrieveAll((err, fighters) => {
    if (err)
      return res.json(err);
    return res.json(fighters);
  });
});

router.get('/:fighterName', (req, res) => {
  Fighters.getFighterByName(req.params.fighterName, (err, fighter) => {
    if (err)
      return res.json(err);
    return res.json(fighter);
  });
});

module.exports = router;