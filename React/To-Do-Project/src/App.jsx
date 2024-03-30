import React from "react";
import Heading from "./components/Heading";
import Todolist from "./components/Todolist";
import Todelete from "./components/Todelete";

function App() {
  return (
    <center className="todo-container">
      <Heading />
      {/* Render the Todolist component here */}
      <Todolist />
      <Todelete/>

      {/* Example todo items */}
      {/* Second Row */}
      
    </center>
  );
}

export default App;
