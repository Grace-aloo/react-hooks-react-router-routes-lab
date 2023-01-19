import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((actor,index)=>{
      return <div key={index}>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
        <ul>
          <li>{actor.movies.map((movie)=>movie)}</li>
        </ul>
      </div>
    })}
  </div>;
}

export default Actors;
