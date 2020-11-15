import React from "react";
import Container from "../../components/container";
import Searchcontainer from "../../components/Searchcontainer";
import API from "../../Utils/API.js";

export default function Searched() {
  // create a search bar and also work with handleInputChange on the search bar
  // put the state in here for the search bar, pass it down as a prop to the Searchcontainer component
  // that way the state for the search bar will still be in this file so that you can use it inside your handleFormSubmit
  // activity 17 forms demo in the 19 module
  // When the user submits the form, run the API(axios) call to the googleapis api
  // display the books and allow users to save books
  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchForBooks("harry potter").then((res) => {
      console.log(res);
      // take the books from res and show them to the user
      // this is like when you made a call to the randomUserAPI and then mapped out the employees to show the user (hw employee-directory)
      res.json(handleFormSubmit)
    });
  };

  return (
    <div>
      <Container />
      <Searchcontainer />
    </div>
  );
}
