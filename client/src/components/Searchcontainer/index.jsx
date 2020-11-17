import React from "react";
// import "./style.css";

 const Form = props => (
  // return (
    // <div>
    
      // {/* <div className="container-lg paper"> */}
        // {/* <div className="row"> */}
          // <h1>Book Search</h1>
        // {/* </div> */}


      <form onSubmit={props.searchForBooks}>
        <input type="text" name="bookTitle"></input>
        <button>Search</button>
      </form>
      
      // {/* </div> */}
      // {
        /* <br/>
      <div className="container-lg paper">
        <div className="row">
          <h1>Results</h1>
        </div>
      </div>
    // </div> */
  // }
  // );
 )

export default Form;