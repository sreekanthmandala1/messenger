const express = require('express');
const router = express.Router();
const chat = require('../models/chat.js');
const ObjectId = require('mongoose').Types.ObjectId;
//get API
router.get('/',(req,res)=>{
    chat.find((err,doc)=>{
        if(err){
            console.log('Error in get data'+err)
        }else{
            res.send(doc);
        }
    })
});

//get single chat API
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        chat.findById(req.params.id, (err,doc)=>{
            if(err){
                console.log('Error in get data'+err)
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('no record found with id' + req.params.id);
    }
    
});

//post API
router.post('/',(req,res)=>{
    let emp = new chat({
        msg : req.body.msg,
    
    });
    emp.save((err,doc)=>{
        if(err){
            console.log('Error in post data'+err)
        }else{
            res.send(doc);
        }
    })
});

//get put API
router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let emp = {
            msg : req.body.msg,
        
        };
        chat.findByIdAndUpdate(req.params.id,{$set : emp}, {new : true},(err,doc)=>{
            if(err){
                console.log('Error in update data'+err)
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('no record found with id' + req.params.id);
    }
    
});


//get Delete API
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        chat.findByIdAndRemove(req.params.id, (err,doc)=>{
            if(err){
                console.log('Error in Delete data'+err)
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('no record found with id' + req.params.id);
    }
    
});



module.exports = router;
