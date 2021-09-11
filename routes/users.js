var express = require('express');
var router = express.Router();
const mysql = require("mysql2");

/* GET users listing. */
router.get('/', function(req, res, next) {

  req.app.locals.con.connect(function(err) {
    if (err) {
      console.log(err);
    }

    let saveItem = "Plantera om tomater";
    let saveList = "Växthus";

    let sql = `INSERT INTO lists (item, list) VALUES ("${saveItem}", "${saveList}")`

    req.app.locals.con.query(sql, function(err, result) {
      if (err) {
        console.log(err);
      }
      console.log("result", result);

  })
})

});

module.exports = router;
