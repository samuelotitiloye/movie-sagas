import React, { Component} from 'react';



class MuiGrid extends Component {
render() {
    return (
        <Grid container justify="center">
            <Grid item xs={5}>
                <img
                    src={this.props.movie.poster}
                    onClick={this.handleClick}
                    alt={this.props.movie.title} />
            </Grid>
            <Grid item xs={5}>
                <h2> {this.props.movie.title}</h2>
                <p>{this.props.movie.description}</p>
            </Grid>
        </Grid>
    );
}




// class MuiGrid extends Component {
//     hanldelick 
//     this.PaymentResponse.dispatch ({type'GET DETAIL'}, payload this.props.singlemovie)
//     this.props.history.push('details')
// }


// render ()


// // inside render and return
// Grid container justify ="center"
// <Grid item xs={5}
//                 <Image
//                     src={this.props.singlemovie.poster}
//                     onClick={this.hanldelick}
//                     alt={this.props.movie.title} //single movie...