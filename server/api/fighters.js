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

router.post('/', (req, res) => {
  var fighter = req.body.city;

  Fighters.insert(fighter, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  })
});

module.exports = router;