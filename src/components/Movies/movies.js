import React, {Component} from 'react';
// import './App.css';
import {connect} from 'react-redux';


//place client side get request in this component
class movies extends Component {
    movies = () => {
        // console.log('movies');
        //dispatch acton with a type to run my saga that will trigger the  generator function that holds the type's data
        this.props.dispatch ({type:'FETCH_MOVIES'});
    }
    // document on ready function to trigger dispatch action
    componentDidMount () {
        this.movies();
    }

    // handleClick = () => {
    //     console.log('clicked a movie');
    //     this.props.history.push('/Details')
    //     this.props.dispatch({type:'', payload:this.state})
    // }

    // {this.props.history.push('/details')}

    render() {
        return (
            ///map through my array to get movies on the dom
            // stringify to show what is in the reduxState
            // grab all the column names from the database and include in the map
            // add img src to the map
            <div>
                <button onClick={()=>{this.props.history.push('/details')}}>Details</button>
                <button onClick={()=>{this.props.history.push('/edit')}}>Edit</button>
                <>
                {this.props.reduxState.movies.map(movie => {return <>
                <li key={movie.id}>{movie.title}<br/>{movie.description}</li>
                <img src={movie.poster} alt="database movie posters" /> </> })}
                </>
            </div>
        )
    }
};


const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect (mapReduxStateToProps)(movies);

// now that the movies show up on the dom..now what?
// display movie posters on the dom
// then create a post route??