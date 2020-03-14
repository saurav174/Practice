const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/:leaderid').all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
}).get((req,res,next)=>{
    res.end("Will send the details of the leaderk : "+req.params.leaderid);
}).post((req,res,next)=>{
    res.end('Post operation not supported on /leaders/');
}).put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Updating the leader :'+req.params.leaderid);
}).delete((req,res,next)=>{
    res.end("Deleting the leader :"+req.params.leaderid);
})

module.exports =leaderRouter;