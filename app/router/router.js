const express = require('express');

const db_mysql = require('../mysql/mysql.js');

const router = express.Router();

router.get('/api/getinfo', (req, res) =>
  db_mysql.query('select * from usersheet', (error, result) => (error ? console.log(error.message) : res.send(result)))
);

module.exports = router;
