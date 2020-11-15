import React from "react";
import "./style.css";

export default function Searchcontainer() {
  return (
    <div>
      <br/>
      
      <br/>
      <div className="container-lg paper">
        <div className="row">
          <h1>Book Search</h1>
        </div>
        <input type="text"></input>
        <button>Search</button>
      </div>
      <br/>
      <div className="container-lg paper">
        <div className="row">
          <h1>Results</h1>
        </div>
      </div>
    </div>
  );
}
