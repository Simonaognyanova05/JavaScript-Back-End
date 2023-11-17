const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/testdb';

const catSchema = new mongoose.Schema({
    name: String,
    bread: String,
    age: Number
})

const Cat = mongoose.model('Cat', catSchema);

start();

async function start(){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    // try{
    //     const cat = new Cat({
    //         name: 'Darsy',
    //         bread: 'Baby',
    //         age: '0.5'
    //     })
    //     await cat.save();
    // }catch(err){
    //     console.log('Error')
    // }

    const data = await Cat.find({});
    console.log(data);
}

