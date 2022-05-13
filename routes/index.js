var express = require('express');
var router = express.Router();

var  Db = require('../config/dboperations');

router.route('/').get((request, response) => {
  Db.getOrders().then((data) => {
    response.json(data[0]);
  })
})



module.exports = router;

