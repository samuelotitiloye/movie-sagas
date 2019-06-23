import React, {Component} from 'react';
// import './App.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



class MovieItem extends Component {
    // Renders the entire app on the DOM
     handleClick = () => {
         console.log('clicking image', this.props.movie.id);
         this.props.dispatch({type:'SINGLE_MOVIE', payload:this.props.movie.id})
         
        //  this.props.history.push('/details');
     }
       
    render() {
      return (
        <div className="MovieItem">
        <li key={this.props.movie.id}>{this.props.movie.title}<br/>{this.props.movie.description}</li>
        <Link to="/details"><img onClick = {this.handleClick} src={this.props.movie.poster} alt="database movie posters" /></Link>
        </div>
      );
    }
  }

  
const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect (mapReduxStateToProps)(MovieItem);




  //// map(<movieITem history = this.props.history) key