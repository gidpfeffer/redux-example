import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    if(!this.props.book){
      return(<div>Select a book to get started</div>);
    }

    return(
      <div>
      <h1>Details</h1>
        Title: { this.props.book.title }
        <br/>
        Pages: { this.props.book.pages }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    //takes in the state to be used for injecting props into BookList
    book: state.activeBook
  }
}

//
export default connect(mapStateToProps)(BookDetail);
