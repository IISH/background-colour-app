/**
 * index
 *
 * Description
 * Serve the home page
 *
 */

const express = require('express');
const createError = require("http-errors");
const router = express.Router({});

router.param('background', function(req, res, next, background){
   req.background =  background;
   next();
});

router.get('/', function (req, res, next) {
    render(process.env.BACKGROUND_COLOUR || 'white', req, res, next);
});

router.get('/:background', function (req, res, next) {
    render(req.background, req, res, next);
});

function render(background, req, res, next) {
    const list_background = req.app.get('list_background');
    if ( list_background[background]) {
        res.render('index', {title:background, background:background, list_background: list_background});
    } else {
        next(createError(404));
    }
}

module.exports = router;