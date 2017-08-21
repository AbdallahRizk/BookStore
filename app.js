// Tools to be used in the web development
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//To connect it to the web front-end
app.use(express.static(__dirname+'/client'));
//To read data from forms
app.use(bodyParser.json());


//Models to be used
Genre = require('./models/genre.js');
Book = require('./models/book.js');


// Database Connection
let conn = mongoose.connection;
conn.openUri('mongodb://localhost/bookstore');

conn.on('error', err => console.error('mongodb connection error', err));
conn.on('connected', () => console.info(`Connected to mongodb`));
conn.on('disconnected', () => console.info('Disconnected from mongodb'));


// Routing to specific pages:

// Get requests
app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/api/genres', function(req , res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    })
});

app.get('/api/books', function(req , res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    })
});

app.get('/api/books/:_id', function(req , res){
    Book.getBookById(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    })
});

//Post Requests
app.post('/api/genres', function(req , res){
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    })
});


app.post('/api/books', function(req , res){
    var book = req.body;
    Book.addBook(book, function(err, book){
      if(err){
         throw err;
      }
      res.json(book);
    })
});

//Put requests
app.put('/api/genres/:_id', function(req , res){
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre,{}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    })
});

app.put('/api/books/:_id', function(req , res){
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book,{}, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    })
});

//Delete Requests
app.delete('/api/genres/:_id', function(req , res){
    var id = req.params._id;
    Genre.deleteGenre(id, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    })
});

app.delete('/api/books/:_id', function(req , res){
    var id = req.params._id;
    Book.deleteBook(id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    })
});





//Specify the listening port
app.listen(3000);
//Display the url on the termianl
console.log('Server Running On http://localhost:3000');

