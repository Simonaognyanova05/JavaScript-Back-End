const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017';

start();

async function start(){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Connected');
}
