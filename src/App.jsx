import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";
import { AddRes } from "./components/AddRes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AddRes />
      <RestaurantDetails />
    </div>
  );
}

export default App;
