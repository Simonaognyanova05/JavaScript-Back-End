const {Schema, model} = require('mongoose');


const carShema = new Schema({
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

carShema.methods.startEngine = function () {
    console.log(`${this.name} - ${this.price}`);
}
carShema.virtual('VAT').get(function () {
    return this.price * 0.2;
})
const Car = model('Car', carShema);

module.exports = Car;