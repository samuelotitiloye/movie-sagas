import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

// this component does stuff

class MovieItem extends Component {
    // Renders the entire app on the DOM
    handleClick = () => {
        console.log('clicking image', this.props.movie.id);
        this.props.dispatch({ type: 'SINGLE_MOVIE', payload: this.props.movie })

        //  this.props.history.push('/details');
    }

    render() {
        return (
            <Grid container justify='center'>
                <Grid item xs={6}>
                <Link to="/details"><img onClick={this.handleClick}  id="moviePosters" src={this.props.movie.poster} alt="database movie posters" /></Link><br/>
                </Grid>
                <Grid item xs={6}>
                {/* {this.props.movie.id}> */}
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.description}</p>
                </Grid>
            </Grid>
        );
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect(mapReduxStateToProps)(MovieItem);




  //// map(<movieITem history = this.props.history) key