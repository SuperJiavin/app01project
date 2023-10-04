const express = require('express');

const db_mysql = require('../mysql/mysql.js');

const router = express.Router();

router.get('/api/getbook', (req, res) =>
  db_mysql.query('select * from usersheet where id <= 5', (error, result) => {
    //从MySQL数据库的usersheet表中查询id小于等于5的所有图书数据。
    if (error) throw new Error(error);
    res.send({ message: '获取图书列表成功!', status: 200, data: result });
    console.log(result);
  })
);

module.exports = router;
