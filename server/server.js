const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('../server/modules/pool'); 
// const movieRouter = require('./modules/router/router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
// app.use('/api/movies', movieRouter);
app.get('/api/movies', (req, res) =>{
    console.log('selecting movies');
    //query request to the database -  store
    const queryText = 'SELECT *  FROM movies';
    pool.query(queryText)
    .then((result) =>{
        console.log(result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error completing SELECT movies query', error);
        res.sendStatus(500);
    });
});


// app.use('/api/genres', genreRouter);
app.get('/api/genres', (req, res)=>{
    console.log('getting genres');
    //qeury request to the database 
    const queryText = 'SELECT * FROM "genres";';
    pool.query(queryText)
    .then((result)=>{
        console.log(result.rows);
        res.send(result.rows);    
    }).catch((error)=>{
        console.log('error completing SELECT genre query', error);
        res.sendStatus(500);
    });
});

//this will get a single movie and detail then display on the details page
app.get('/api/movieDetail/:id', (req, res)=>{
    console.log('getting details');
    //qeury request to the database 
    const queryText = 'SELECT * FROM "movies" WHERE "id"=$1;';
    pool.query(queryText, [req.params.id])
    .then((result)=>{
        console.log(result.rows);
        res.send(result.rows);    
    }).catch((error)=>{
        console.log('error completing SELECT details query', error);
        res.sendStatus(500);
    });
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});