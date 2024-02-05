// const heading = React.createElement("h1",
// {id:"heading"},
// "Hello World from React"); //React.createElement returns a javascript object.
// console.log(heading);  
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //render method converts the heading object to h1 tag.

import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child1"},[
React.createElement("h1",{},"I am h1 tag Namaste React"),
React.createElement("h2",{},"I am h2 tag")]),
React.createElement("div",{id:"child2"},[
React.createElement("h1",{},"I am h1 tag"),
React.createElement("h2",{},"I am h2 tag")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);