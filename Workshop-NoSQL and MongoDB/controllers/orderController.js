const express = require('express');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

let router = express.Router();
mongoose.set('useFindAndModify', false);

router.get('/', (req, res) => {
    res.render('menu');
})

router.get('/cart', (req, res) => {
    res.render('cart');
})

router.get('/order', (req, res) => {
    res.render('order');
})

router.get('/admin', (req, res) => {
    Order.find((err, docs) => {
        if(!err){
            res.render('admin', {
                order: docs
            });
        }else{
            console.log('Error in order: ' + err);
        }
    })
})

router.get('/order/:id', (req, res) => {
    Order.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render('orders', {order: doc });
        }else{
            console.log('Error findById: ' + err);
        }
    })
})

router.get('/order/delete/:id', (req, res) => {
    Order.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.redirect('/admin');
        }else{
            console.log('Error deleting: ' + err);
        }
    })
})

router.post('/cart', (req, res) => {
    insertOrder(req, res);
})

router.post('/order', (req, res) => {
    updateOrder(req, res);
})

function updateOrder(req, res){
    Order.findOneAndUpdate({id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(!err){
            res.redirect('/admin');
        }else{
            console.log('Update error: ' + err);
        }
    })
}

function insertOrder(req, res){
    var d = new Date();
    var t = d.getTime();
    var couner = t; 
    couner += 1;
    var order = new Order();
    order.total = req.body.total;
    order.order = couner;
    order.save((err, doc) => {
        if(!err){
            console.log('order ' + order);
            res.redirect('/admin');
        }else{
            console.log('Error in insert order: ' + err);
        }
    })
}

module.exports = router;