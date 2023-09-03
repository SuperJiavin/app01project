const express = require('express'); 

const path = require('path');

const cors = require('cors');

const route = require('./router/router.js');

const app = express();

const staticSource = express.static(path.join(__dirname, 'build'));

app.use(staticSource);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const mw = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
};

app.use(mw);

app.use(route);

app.listen(8080, () => console.log('express server running at http://127.0.0.1:8080'));
