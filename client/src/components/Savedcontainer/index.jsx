import React from "react";
import "./style.css";

export default function Savedcontainer() {
  return (
    <div>
      <br/>
      
      <br/>
      <div className="container-lg paper">
        <div className="row">
          <h1>Saved Books</h1>
        </div>
      <br/>
      <div className="container-md paper">
        <div className="row">
          <p>Book title </p>

          <button>View</button>
          <button>Delete</button>
        </div>
        
      </div>
      </div>
     
    </div>
  );
}
