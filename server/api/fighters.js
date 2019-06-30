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

module.exports = router;