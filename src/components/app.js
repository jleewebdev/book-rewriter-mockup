import React, { Component } from 'react';
import BooksList from '../containers/books_list'
import ChaptersList from "../containers/chapters_list"
import Word from "./word"




export default class App extends Component {

  render() {
  
    return (
      <div>
        <Word />
      </div>
    );
  }
}
