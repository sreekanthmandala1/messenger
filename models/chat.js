const mongoose = require ('mongoose');

const chat = mongoose.model('chat',{
   msg : {type:String},
   
});

module.exports = chat;