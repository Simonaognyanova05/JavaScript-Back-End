const mongoose = require('mongoose');

const connetcionString = 'mongodb://localhost:27017/testdb';
const catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {
        type: Number,
        default: 0,
        // validate: {
        //     validator: function (value) {
        //         return value >= 0;
        //     },
        //     message: 'Error'
        // } 
        min: [0, 'Price cannot be less than {VALUE}'],
    }
})

start();

async function start(){
    await mongoose.connect(connetcionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    try{
        const cat = new Cat({
            name: 'Maxi',
            age: 0.5,
        });
        await cat.save();
    }catch(err){
        console.log('Error');
    }

    const cat = await Cat.findOne({name: 'Lussy'});
    console.log(cat);
}

module.exports = (req, res) => {
    res.render('home')
}