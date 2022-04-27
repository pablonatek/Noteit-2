//routes
const express = require('express');
const router = express.Router();
var notas = "";
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

con.connect(function(err) {
    if (err) throw err;
    notas =  con.query("SELECT * FROM note", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
console.log(notas);
router.get('/', (req, res) => {
    res.render('index.ejs', { title: 'Noteit' , texto: notas});
});

module.exports = router;