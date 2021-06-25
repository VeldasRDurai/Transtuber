var express = require('express');
var router = express.Router();

const show = require('./dowloader');

router.post('/', async (req, res, next) => {
    console.log( req.body );
    const { transcript, url } = await show( req.body.link );
    res.json({ name : 'veldasrdurai72', transcript, url }).send();
    //   res.render('index/index', { title: 'Express' });
});

module.exports = router;
