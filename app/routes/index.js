var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  const client = require("../db_client").pg_client()

  let sql_result = 'None'
  // client.connect()
  //   .then(() => console.log("Connected successfuly"))
  //   .then(() => client.query("select * from chat"))
  //   .then(results => 
  //     console.table(results.rows)
  //   )
  //   .catch((e => console.log(e)))
  //   .finally((() => client.end()))
  client.connect()
    .then(() => console.log("Connected successfuly"))
    .then(() => client.query("select * from chat"))
    .then(function (results) {
      console.table(results.rows)
      res.render('index', { title: 'セレクト', sql_result: JSON.stringify(results.rows)})
    })
    .catch((e => console.log(e)))
    .finally((() => client.end()))

  // res.render('index', { title: 'Express' ,sql_result: results.rows});


});

module.exports = router;
