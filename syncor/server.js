const { application } = require('express');
var express = require('express');
var mongoose = require('mongoose');

var URI = '';
mongoose.connect(URI)
  .then(c => console.error('connection made'))
  .error(e => console.log(e));

const exportSchema = new mongoose.Schema({

  id: string,

  name: string,

  export: string,

  hsn: string,

});


var Export = mongoose.model('Export', exportSchema);
var app = express();

app.post('/product', (re, rs, nxt) => {

  var id = req.body.id;
  var name = req.body.name;
  var.export = req.body.export;
  var hsn = req.body.hsn;

  Export({ id, name, export, hsn });

  rs.json(`created + ${ id }`);
});

app['listen'](3000);