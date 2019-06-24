import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
// import MovieItem from '../MovieItem/MovieItem';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';



class Details extends Component {
    handleClick = () => {
        console.log('take me back home');
        // i needed to add push to the history in order to return to the home page
        this.props.history.push('/')
        // this.props.dispatch({type:'FETCH_MOVIES'})
    }

    //this will route to the next page which is the Edit page
    handleClickEdit = () => {
        this.props.history.push('/edit');
    }

    render() {
        console.log('inside movie details');
        return (
            <Grid container justify='center'>
                <Grid item xs={8}>
                {/* <div className="Details"> */}
                <Link to='/' /><button onClick={this.handleClick}>Back to List</button>
                <Link to='/' /><button onClick={this.handleClickEdit}>Edit</button>
                <br/>
                <br/>
                {this.props.reduxState.singleMovie.title}
                {this.props.reduxState.singleMovie.description}
                <br/>
                <br/>
                <img src={this.props.reduxState.singleMovie.poster} alt="Movie Poster"/>
                {this.props.reduxState.genres.map(genre => <p>{genre.name}</p>)}
                </Grid>
                {/* <pre>
                    {JSON.stringify(this.props.reduxState.genres, null, 2)}
                </pre> */}
            {/* </div> */}
            </Grid>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Details);



// {this.props.reduxState.movies.map(movie => 
//     {return  <MovieItem movie={movie} />})}
/* {JSON.stringify(this.props.reduxState.singleMovie[0].title)}; */
// class Details extends Component {
//<img src ={this.props.reduxState.singleMovie.poster} />
//{this.props.reduxState.singleMovie.title}
//{this.props.reduxState.singleMovie.description}
//    {this.props.reduxState.singleMovie.map(movie => 
// {return  <MovieItem movie={movie} />})}      





