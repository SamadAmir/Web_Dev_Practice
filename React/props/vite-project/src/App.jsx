// App.js
import FoodList from "./components/Foodlist";
import Student from "./components/Student";

function App() {
  let fooditems = ["."];
  return (
    <>
      <h1>Healthy Food</h1>
      {fooditems.length === 0 ? (
        <h1>I am Empty</h1>
      ) : (
        <FoodList></FoodList>
      )}

      <Student name="Samad" age={15} sex="F"></Student>
    </>

  );
}

export default App;
