const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDb', (err)=>{
    if(!err){ console.log('Database connection successful')
}else{
    console.log('error in connection' + err)
}
})

module.exports = mongoose;