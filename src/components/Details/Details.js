import React, { Component } from 'react';
import '../App/App.css';


class Details extends Component {
  // Renders the entire app on the DOM
  onClick = () => {

  }


  render() {
    return (
      <div className="Details">
        <button onClick ={() => this.props.dispatch({type:'GET_ALL_MOVIES'})}>Back to List</button>
        {/* <button onClick ={() => this.props.dispatch({type:'GET_ALL_MOVIES'})}>Edit</button> */}
        {JSON.stringify(this.props.reduxState, null, 2)}
      </div>
    );
  }
}

export default Details;



