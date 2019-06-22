import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';


class Edit extends Component {
state = {
    editMovie: '',
}

// handleChange = () =>{
//     this.setState ({
        
//     });
// }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="Edit">
        <button onClick ={() => this.props.dispatch({type:'GET_ALL_MOVIES'})}>Cancel</button>
        <button onClick ={() => this.props.dispatch({type:'GET_ALL_MOVIES'})}>Save</button>
        <input value={this.state.editMovie} onChange={this.handleChange} placeholder="movie title"></input>
        <input placeholder="edit details"></input>
        {JSON.stringify(this.props.reduxState, null, 2)}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(Edit);