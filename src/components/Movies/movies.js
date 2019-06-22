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

    render() {
        return (
            <div>
                <>
                {this.props.reduxState.movies.map(movie => {return <li key={movie.id}>{movie.title}</li>})};
                </>
                <>
                {JSON.stringify(this.props.reduxState, null, 2)};
                </>
            </div>
        )
    }
};


const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect (mapReduxStateToProps)(movies);




// stringify to show what is in the reduxState
//map through my array to get movies on the dom}










