import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
//import takeEvery, and declare put as dispatch so i can use dispatch instead of put
import { takeEvery, put as dispatch } from 'redux-saga/effects';
//import axios  - which allows me to make server side CRUD requests
import axios from 'axios';
// import {connect} from 'react-redux';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('ADD_GENRE', fetchGenre);
    yield takeEvery('SINGLE_MOVIE', movieDetail)
    yield takeEvery('UPDATE_MOVIE', updateMovie)
}



function* updateMovie(action){
    console.log('trying to update');
    const updatedMovie = yield axios.put('/api/update', action.payload)/// sending to the server
    yield dispatch ({type:'FETCH_MOVIES'})
    console.log('updated movie object is:', updatedMovie);
    yield dispatch({type:'SET_MOVIE', payload: updatedMovie.data[0]}) // returns single item in the array
}

// this.props.dispatch({type:'SINGLE_MOVIE', payload:this.props.movie.id})

function* movieDetail (action){
    console.log(action.payload);
    try {
        console.log('hit the movie detail');
        yield dispatch({type:'SET_MOVIE', payload:action.payload})
        const detailResponse = yield axios.get(`/api/movieDetail?id=${action.payload.id}`)// action.payload becomes req.query in the server side axios get request
        yield dispatch({type:'SET_TAGS', payload:detailResponse.data});
        console.log('end of movie detail request');
     }catch(error){
        console.log(error);
    }
}


// axios client side get request
function* fetchMovies (){
    try {
        console.log('hit fetch movies');
        const movieResponse = yield axios.get('/api/movies')
        // yield axios.get('/')
        yield dispatch ({type:'SET_MOVIES', payload:movieResponse.data});
        console.log('end of fetch movies request');
    }catch(error){
        console.log(error);
    }
} 

//create axios genre get request
function* fetchGenre  () {
    try {
        console.log('hit fetch genre');
        const genreResponse = yield axios.get('/api/genres')
        //yeild axios
        yield dispatch ({type:'SET_TAGS', payload:genreResponse.data});
        console.log('end of fetch genre request');  
    }catch(error){
        console.log(error);
    }
}

// axios client side post movies request
// function* postMovies (){
//     try {
//         console.log('hit post movies');
//         const postResponse = yield axios.post('/api/movies', action.payload);
//         //trigger the get request function
//         yield dispatch({type:'ADD_MOVIES'});
//         console.log('end of postMovies request');   
//     } catch (error) {
//         console.log(error);
//     }
// }

// create a new variable for to hold initial state of movies before being clicked
// const firstMovieState = [{
//     id:'',
//     title:'',
//     title:'',
//     description:'',
// }]


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// use to return SINGLE movie from the server
const singleMovie = (state = {}, action) =>{
    switch(action.type) {
        case 'SET_MOVIE':
            return action.payload
            default:
                return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        singleMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
