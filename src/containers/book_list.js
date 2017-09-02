import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) =>{
      return(
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return{
    //takes in the state to be used for injecting props into BookList
    books: state.books
  }
}

//anything returned by this will end up as props on BookList container
//whenever we call this.props.selectBook, it calls imported selectBook
//dispatch makes sures they all flow through the reducers
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
