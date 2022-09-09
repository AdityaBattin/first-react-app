import "./App.css";
import ClassComponent from "./component/ClassComponent";
import FunctionalComponent from "./component/FunctionalComponent";
import { useState } from "react";

//creating our first component
function App() {
  const [name, setName] = useState("Aditya");

  return (
    <div className="AppIT">
      <h1>Class Component</h1>
      <ClassComponent />
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent
        name={name}
        age={21}
        setName={setName}
        // setnameData={setnameData}
      />
    </div>
  );
}

export default App;
