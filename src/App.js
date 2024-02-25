// const heading = React.createElement("h1",
// {id:"heading"},
// "Hello World from React"); //React.createElement returns a javascript object.
// console.log(heading);  
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //render method converts the heading object to h1 tag.

import React from 'react';
import ReactDOM from 'react-dom';

// const parent = React.createElement("div",{id:"parent"},[
// React.createElement("div",{id:"child1"},[
// React.createElement("h1",{},"I am h1 tag Namaste React"),
// React.createElement("h2",{},"I am h2 tag")]),
// React.createElement("div",{id:"child2"},[
// React.createElement("h1",{},"I am h1 tag"),
// React.createElement("h2",{},"I am h2 tag")])]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//React.createElement => object => HTMLElement(render)
// React Element
//const heading = React.createElement(
//    "h1",
//    {id:"heading"},
//    "This is a heading from Namaste React"
//);

const jsxHeading = <h1 className="heading" tabIndex="1"> This is React using JSX</h1>
//JSX ==>Babel transpiles to React.createElement ==> React Element-JS Object ==> HTML Element(render)
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);

//React Components
//Class Based Components  --old
//Functional Components  -- new

//React functional Component   (Difference between React Element and React Functional Component is first letter and fat arrow method)
//First letter of Component name starts with capital letter
const HeadingComponent = () => {
    return <h1>This is a heading Component1</h1>;
}

const HeadingComponent2 = () => (
    <div className="container">
        {jsxHeading}  {/*Write any js code within these braces */}
        <HeadingComponent/>  {/*Component Composition */}
        <h1 className="heading">This is a functional component</h1>
    </div>
)
root.render(<HeadingComponent2/>);