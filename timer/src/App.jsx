import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Timer start={0} end={1000} />
    </div>
  );
}

export default App;
