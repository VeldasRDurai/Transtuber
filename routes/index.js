var express = require('express');
var router = express.Router();

const show = require('./dowloader');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const transcript = await show('https://www.youtube.com/watch?v=2VEwphv-ro4');
  res.render('index', { title: 'Express', transcript });
});

module.exports = router;
