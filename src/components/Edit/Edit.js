import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


class Edit extends Component {
    // i need to create state because i have inputs that will change
state = {
    title: '',
    description:'',
    id: this.props.reduxState.singleMovie.id
}

// i needed to spread state to keep what's in state then update when a value is inputed 
handleChange = (event) => {
    this.setState ({
       ...this.state, [event.target.id]:event.target.value,
    });
}
//this targets the save button action
handleSubmit = () =>{
  console.log('in handleSubmit', this.state);
    this.props.dispatch({type:'UPDATE_MOVIE', payload:this.state})
    this.props.history.push('/details')
    this.props.dispatch({type:'FETCH_MOVIES'});// runs 
}

//this handles the calcel button acion
handleCancel = () => {
    console.log('in handleCancel', this.state);
}

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="Edit">
        <Link to={'/details'}><button onClick ={this.handleCancel}>Cancel</button></Link>
        <button onClick ={this.handleSubmit}>Submit</button>
        <Grid container justtify ='center'>
          <Grid item xs={6}>
        <input value={this.state.title} id='title' onChange={this.handleChange} placeholder="movie title"></input>
        <textarea rows="10" cols="80" value={this.state.description} id='description' onChange={this.handleChange}></textarea>
        </Grid>
        </Grid>
        {/* <input value={this.state.description} id ='description' onChange={this.handleChange} placeholder="edit details"></input> */}
        {/* <pre>
        {JSON.stringify(this.props.reduxState.singleMovie, null, 2)}
        </pre>  */}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});
export default connect(mapReduxStateToProps)(Edit);

//line 33 lines to my details page so upon button click returns me to the details page
//line 34 calls the handlesubmit function which updates state, 
//pushes me to the details page and runs calls FETCH_MOVIES
// 