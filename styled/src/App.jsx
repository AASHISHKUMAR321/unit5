import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button border={"none"} color={"white"} backgroud={"blue"}>
        Primary Button
      </Button>
      <Button border={""} color={"black"} backgroud={"white"}>
        default Button
      </Button>
      <Button border={"dashed"} color={"black"} backgroud={"white"}>
        dashed Button
      </Button>
      <Button border={"none"} color={"black"} backgroud={"white"}>
        text Button
      </Button>
      <Button border={"none"} color={"blue"} backgroud={"white"}>
        Link Button
      </Button>
    </div>
  );
}

export default App;
