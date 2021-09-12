var express = require("express");
var router = express.Router();
const mysql = require("mysql2");
const cors = require("cors");

router.use(cors());

/* GET items */

router.get("/items", function (req, res) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    const sqlItems = `SELECT * FROM listItems`;
    
    req.app.locals.con.query(sqlItems, function (err, items) {
      if (err) {
        console.log(err);
      }
      res.json(items);
  })
})
});

router.post("/additem", function (req, res) {


  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    let saveItem = req.body.item;
    let saveDate = req.body.createDate;

    let sql = `INSERT INTO listItems (item, createDate) VALUES ("${saveItem}", "${saveDate}")`;

    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  });
});


router.delete('/deleteitem/:itemId', function (req, res) {

  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    let itemId = req.params.itemId;

    let sql = `DELETE FROM listItems WHERE itemId = "${itemId}"`;

    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  });
});


router.put('/items/:itemId', function (req, res) {

  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }
    let itemId = req.params.itemId;

    let sql = `UPDATE listItems SET done = !done WHERE itemId = "${itemId}"`;

    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  });
});




module.exports = router;