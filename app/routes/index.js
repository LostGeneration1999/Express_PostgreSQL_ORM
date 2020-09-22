var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index');

//   const client = require("../db_client").pg_client()

//   client.connect()
//     .then(() => console.log("Connected successfuly"))
//     .then(() => client.query("select * from chat order by timestamp desc"))
//     .then(function (results) {
//       console.table(results.rows)
//       res.render('index', { title: 'セレクト', sql_result: results.rows})
//     })
//     .catch((e => console.log(e)))
//     .finally((() => client.end()))
  // res.render('index', { title: 'Express' ,sql_result: results.rows});
});

module.exports = router;
