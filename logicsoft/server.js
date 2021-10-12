var express = require('express');
var mongoose = require('mongoose');

var URI = '';
mongoose.connect(URI)
  .then(c => console.error('connection made'))
  .error(e => console.log(e));

var bookSchema = new mongoose.Schema({
  title: string,

  author: string,

  isbn: string,

  price: number
});

var Book = mongoose.model('Book', bookSchema);

var app = new express();

app.get(express.json({}));

app.get('/books', async (req, res, next) => {

  const isbn = req.param.isbn;

  var book = await Book.find({ isbn });

  res.json({ book: book });

  next();
});

app.listen(3000, () => console.log('APP STARTED ON PORT 3000'));