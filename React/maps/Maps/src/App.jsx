/* eslint-disable react/jsx-key */
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let fooditems = ["Dal", "chawal", "Sabzi"];
  return (
    <>
      <h1>Healthy Food</h1> 
      <ul className="list-group">
        {fooditems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
//data.map((x) => <Hello key={x.id}>{x}</Hello>);