import Heading from "./components/Heading";
import Todolist from "./components/Todolist";
//import Todelete from "./components/Todelete";
import ToDeleteItem from "./components/ToDeleteItem";

function App() {
  const todoitems=[{
    name:"Buy Milk",
    dueDate:"4/10/23"
  },
  {
    name:"Go To College",
    dueDate:"4/10/23"
  },
  {
    name:"Complete Project",
    dueDate:"16/04/23"
  }
  ];
  return (
    <div className="container">
      <Heading />
      <Todolist />
      <ToDeleteItem todoitems={todoitems}></ToDeleteItem>

      
      
      </div>
  );
}

export default App;
