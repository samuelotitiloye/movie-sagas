import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';



class Details extends Component {


  render() {
      console.log('inside movie details');
      
    return (
      <div className="Details">
        <button>Back to List</button>
          <img src ={this.props.reduxState.singleMovie.poster} />
          {this.props.reduxState.singleMovie.title}
          {this.props.reduxState.singleMovie.description}
        </div>
    );
  }
}


const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect (mapReduxStateToProps)(Details);

/* {JSON.stringify(this.props.reduxState.singleMovie[0].title)}; */
// class Details extends Component {

//     render() {
//       return (
//         <div className="Details">
//           <button>Back to List</button>
//           <img src ={this.props.reduxState.singleMovie.poster} />
//           {this.props.reduxState.singleMovie.title}
//           {this.props.reduxState.singleMovie.description}
//         </div>
//       );
//     }
//   }





