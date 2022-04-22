import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./components/Todo";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {/* {show ? <Todo /> : null} */}

      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button> */}
      {/* 
      <Counter /> */}

      <Todo />
    </div>
  );
}

export default App;
