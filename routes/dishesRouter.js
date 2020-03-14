const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/:dishid').all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
}).get((req,res,next)=>{
    res.end("Will send the details of the dis : "+req.params.dishid);
}).post((req,res,next)=>{
    res.end('Post operation not supported on /dish/');
}).put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Updating the dish :'+req.params.dishid);
}).delete((req,res,next)=>{
    res.end("Deleting the dish :"+req.params.dishid);
})

module.exports =dishRouter;