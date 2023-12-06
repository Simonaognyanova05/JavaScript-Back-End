const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/dress';

async function create(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    const dressSchema = new mongoose.Schema({
        name: String,
        price: Number
    })
    const Dress = mongoose.model('Dress', dressSchema);
    const {name, price} = req.body;

    try{
        const dress = new Dress({
            name, price
        })
        await dress.save();
        res.redirect('/');
    }catch(err){
        res.send('Error');
    }
}

module.exports = {create}