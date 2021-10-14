var express = require('express');
var mongoose = require('mongoose');
var jsonwebtoken = require('jsonwebtoken');
const { application } = require('express');

var URI = '';
mongoose.connect(URI)
  .then(c => console.error('connection made'))
  .error(e => console.log(e));

var vaccineSchema = new Schema({
  name: string,

  type: string,

  batch: string
});

var Vaccine = mongoose.model('Vaccine', vaccineSchema);

var app = express();

app.get('/vaccines', (rs, re, next) => {
  var vaccine = Vaccine.count();
  rs.json({ vaccine_count: vaccine });
  return next();
});

app.post('/vaccine', (rs, re, next) => {
  var name = req.body.name;
  var type = req.body.type;
  var batch = req.body.batch;
  vaccine = Vaccine.create({ name: name, type: type, batch: batch });
  rs.json({ msg: 'vaccine created' });
  return next();
});


app
  .listen(3000)
  .then(() => console.log('app started listening at 3000'));