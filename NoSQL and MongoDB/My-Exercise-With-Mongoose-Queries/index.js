const mongoose = require('mongoose');
const Cat = require('./models/Cat');

const connetcionString = 'mongodb://localhost:27017/testdb';

start();

async function start(){
    await mongoose.connect(connetcionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    // try{
    //     const cat = new Cat({
    //         name: 'Maxi',
    //         age: 0.5,
    //     });
    //     await cat.save();
    // }catch(err){
    //     console.log('Error');
    // }

    // const cat = await Cat.findOne({name: 'Lussy'});
    // console.log(cat);

    // const cat = await Cat.findByIdAndUpdate('6558e0aecbe44d0e43fee447');
    // cat.name = 'Lussy';
    // await cat.save();

    const cat = await Cat.findByIdAndDelete('6558e0aecbe44d0e43fee447');
    await cat.save();
}