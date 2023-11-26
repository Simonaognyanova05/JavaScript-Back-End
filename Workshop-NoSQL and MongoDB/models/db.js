const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('MongoDB connected');
    }else{
        console.log('Error');
    }
});
require('./order.model')