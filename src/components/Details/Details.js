import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import {Link} from 'react-router-dom';



class Details extends Component {

    handleClick = () => {
        console.log('take me back home');
        this.props.history.push('/')
        // this.props.dispatch({type:'FETCH_MOVIES'})
    }
    handleClickEdit = () => {
        this.props.history.push('/edit');
    }

    // <Link to='/'><button>Back to list</button></Link>

  render() {
      console.log('inside movie details');
      
    return (
      <div className="Details">
        <Link to='/'/><button onClick={this.handleClick}>Back to List</button>
        <Link to='/'/><button onClick={this.handleClickEdit}>Edit</button>
          <img src ={this.props.reduxState.singleMovie.poster} />
          {this.props.reduxState.singleMovie.title}
          {this.props.reduxState.singleMovie.description}
          {this.props.reduxState.singleMovie.map(movie => 
          {return  <MovieItem movie={movie} />})}
          <pre>
              {JSON.stringify(this.props.reduxState.singleMovie, null, 2)}
          </pre>
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





