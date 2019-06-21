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


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});