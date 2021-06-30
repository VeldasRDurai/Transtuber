var express = require('express');
var router = express.Router();

const show = require('./dowloader');

router.post('/', async (req, res, next) => {
    try {
        console.log( req.body );
        const resposeObject = await show( req.body.link );
        res.json( resposeObject ).send();
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
});

module.exports = router;