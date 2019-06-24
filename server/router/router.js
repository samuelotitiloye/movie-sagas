const express =  require('express');
const pool =  require ('../modules/pool');
const router = express.Router();

//this is the get route to retrieve genres from the database
router.get('/genres', (req, res) => {
    console.log('getting genres');
    //qeury request to the database 
    const queryText = 'SELECT * FROM "genres";';
    pool.query(queryText)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch((error) => {
            console.log('error completing SELECT genre query', error);
            res.sendStatus(500);
        });
});
/// selects all movies and orders them by id
router.get('/movies', (req, res) => {
    console.log('selecting movies');
    //query request to the database -  store
    const queryText = 'SELECT *  FROM movies ORDER BY "id";'
    pool.query(queryText)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch((error) => {
            console.log('error completing SELECT movies query', error);
            res.sendStatus(500);
        });
});

// get route to retrieve movie details
router.get('/movieDetail', (req, res) => {
    console.log('getting details');
    //qeury request to the database 
    const queryText = `SELECT "genres"."name" 
    FROM "movies" 
    JOIN "movie_genre" 
    ON "movies"."id" = "movie_genre"."movie_id"
    JOIN "genres" 
    ON "movie_genre"."genre_id" = "genres"."id"
    WHERE "movies"."id"=$1;`;
    pool.query(queryText, [req.query.id])
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch((error) => {
            console.log('error completing SELECT details query', error);
            res.sendStatus(500);
        });
});

// update put route 
router.put('/update', (req, res) => {
    console.log('we are updating');
    const queryText = `UPDATE "movies" 
    SET "title"=$1, "description"=$2
    WHERE "id"=$3 RETURNING "id", "title", "description", "poster";`;
    const updateName = [req.body.title, req.body.description, req.body.id];
    pool.query(queryText, updateName)
        .then(result => {
            console.log('returning the result of the update!!!!!!!!!!!', result.rows);
            res.send(result.rows)
        })
})




module.exports = router;