import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((directors,index)=>{
      return <div key={index}>
        <h3>Name: {directors.name}</h3>
        <p>Movies:</p>
        <ul>
          <li>{directors.movies.map((movie)=>movie)}</li>
        </ul>
      </div>
    })}
      </div>;
}

export default Directors;
