import React, {Component} from 'react';
// import './App.css';
import {connect} from 'react-redux';


//place client side get request in this component
class movies extends Component {
    movies = () => {
        // console.log('movies');
        
        this.props.dispatch ({type:'FETCH_MOVIES'});
    }

    componentDidMount () {
        this.movies();
    }

    render() {
        return (
            //map through my array to get movies on the dom

            // stringify to show what i have in the reduxState
            <>
            {JSON.stringify(this.props.reduxState, null, 2)} 
            </>
        )
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect (mapReduxStateToProps)(movies);













// // import React, { Component } from 'react';
// // import './App.css';

// // class App extends Component {
// //   // Renders the entire app on the DOM
// //   render() {
// //     return (
// //       <div className="App">
// //         <p>Empty Page</p>
// //       </div>
// //     );
// //   }
// // }

// // export default App;