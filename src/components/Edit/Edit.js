import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';


class Edit extends Component {
state = {
    editMovie: '',
    movieTitle:'',
}
// i needed to spread state to keep what's in state then update when a value is inputed 
handleChange = (event) => {
    this.setState ({
       ...this.state, [event.target.id]:event.target.value,
    });
}
//this targets the save button action
handleSave = () =>{
console.log('in handleSave', this.state);
}

//this handles the calcel button acion
handleCancel = () => {
    console.log('in handleCancel', this.state);
}

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="Edit">
        <button onClick ={this.handleCancel}>Cancel</button>
        <button onClick ={this.handleSave}>Save</button>
        <input value={this.state.editMovie}  id='editMovie' onChange={this.handleChange} placeholder="movie title"></input>
        <input value={this.state.movieTitle}  id ='movieTitle' onChange={this.handleChange} placeholder="edit details"></input>
        <pre>
        {JSON.stringify(this.props.reduxState, null, 2)}
        </pre>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(Edit);