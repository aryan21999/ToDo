var express = require('express');
var router = express.Router();

var auth = function (req, res, next) {
  if (req.session.email && req.session.isLogged) {
    return next();
  }
  else
     return res.json({ status: 'FAILED', message: 'Please login.' });
};

var authenticate = require('..api/authenticate')




module.exports = router;
