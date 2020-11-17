import React, { Component } from "react";
import Container from "../../components/container";
import Form from "../../components/Searchcontainer";
// import API from "../../Utils/API.js";
// import axios from "axios";


class Searched extends Component {

  state = {
    books: []
  }

searchForBooks = async (e) => {
  const bookTitle = e.target.elements.bookTitle.value;
  e.preventDefault();
  const API_CALL =  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`);

  const data = await API_CALL.json();
  this.setState({ books: data.items });
  console.log(this.state.books);

  console.log(data.items[0].volumeInfo.imageLinks.thumbnail);
  // console.log(data.items[0].volumeInfo.authors);
  // console.log(data.items[0].volumeInfo.description);
}

  // create a search bar and also work with handleInputChange on the search bar
  // put the state in here for the search bar, pass it down as a prop to the Searchcontainer component
  // that way the state for the search bar will still be in this file so that you can use it inside your handleFormSubmit
  // activity 17 forms demo in the 19 module
  // When the user submits the form, run the API(axios) call to the googleapis api
  // display the books and allow users to save books


  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   API.searchForBooks("john grisham").then((res) => {
  //     console.log(res);

      // take the books from res and show them to the user
      // this is like when you made a call to the randomUserAPI and then mapped out the employees to show the user (hw employee-directory)
      
  //     res.json(handleFormSubmit)
  //   });
  // };

render (){
  return (
    <div>
      <Container />
      <Form searchForBooks={this.searchForBooks} />
{/*       
      {this.state.books.map((book) =>{
         return <p>{book.items.volumeInfo.title}</p> 
      } )}  */}
      
    </div>
  );
}
}

export default Searched;