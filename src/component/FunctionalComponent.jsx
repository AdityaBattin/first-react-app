import React from "react";
import { useState } from "react";

const FunctionalComponent = (props) => {
  // logic is written here State and Props
  const [count, setCount] = useState(0);

  // states in the component is the data of that component
  // inorder to use it we have hooks ... useState from react first include it

  //link the button
  //We use React Event Handler.... onClick = {}
  // It will give an error (*remove err by using an '() => ' function)
  // you can also declare a function here and use it in the return statment

  // props are the data which pass from one component to anathor component
  //for FuntionComponents it is like attributes passed to it
  //<FunctionalComponent name = "arg1" age = {arg2} /> dusing input
  //in the component paramenter we have props in form of object
  //const FunctionalComponent = (props) => { your functional component }
  // HERE Props are stored in form f OBJECT like this
  //  props = {
  //   name : "aditya",
  //   age : "21"
  //  }
  //Inorder to access it we need to use it like props.parameter in the component

  const subcount = () => {
    return setCount(count - 1);
  };

  const [nameData, setnameData] = useState("");

  return (
    <div>
      <h1>This is a functional component</h1>
      <button onClick={() => setCount(count + 1)}>Click Me to add 1</button>
      <button onClick={subcount}>Click Me to Sub</button>
      <h1 class="Counter">{count}</h1>
      <h2>
        Hi {props.name} you work as a employee at age {props.age}
      </h2>
      <button onClick={() => props.setName("Vivek")}>
        Change name to Vivek
      </button>
      <button onClick={() => props.setName("Aditya")}>
        Change name to aditya
      </button>
      <div className="inputField">
        <input onChange={(e) => setnameData(e.target.value)} type="text" />
      </div>
      <button onClick={() => props.setName(nameData)}>Change Name</button>
    </div>
  );
};

export default FunctionalComponent;
