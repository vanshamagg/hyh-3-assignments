const { application } = require('express');
var express = require('express');
var mongoose = require('mongoose');

var URI = '';
mongoose.connect(URI)
  .then(c => console.error('connection made'))
  .error(e => console.log(e));

const orderSchema = new mongoose.Schema({

  id: string,

  product: string,

  qt: string,

  price: string,

});


var Order = mongoose.model('Order', orderSchema);
var app = express();

app.get('/orders', (re, rs, nxt) => {

  var user = req.body.user;

  var ordrs = Order.find({});

  rs.json({ ordrs });

});

app['listen'](3000);