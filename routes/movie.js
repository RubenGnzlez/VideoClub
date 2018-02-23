const express = require('express');
var router = express.Router();


router.get('/', (req, res, next)=> {
    res.render('movies',{title: 'movies'});
});

router.post('/',(req,res,next)=>{
    res.send('estas en diagonalmoviel diagonal post diagonal:v');
});

router.put('/',(req,res,next)=>{
    res.send('estas en diagonalmoviel diagonal put diagonal');
});

router.delete('/',(req,res,next)=>{
    res.send('estas en diagonalmoviel diagonal delete diagonal');
});

module.exports= router;
