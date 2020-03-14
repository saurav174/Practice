const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/:promoid').all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/json');
    next();
}).get((req,res,next)=>{
    res.end("Will send the details of promotion : " + req.params.promoid + " to you!");
}).post((req,res,next)=>{
    res.end('Post operation not supported on /promotion/');
}).put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Updating promotion : '+req.params.promoid);
}).delete((req,res,next)=>{
    res.end('deleting the promotion : '+req.params.promoid);
})

module.exports =promotionRouter;