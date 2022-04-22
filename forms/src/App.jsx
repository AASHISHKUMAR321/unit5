import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Forms } from "./components/Forms";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Forms />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
