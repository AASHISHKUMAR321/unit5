import { useState, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ShowToken } from "./components/ShowToken";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { token } = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar />
      {/* <ShowToken /> */}
      {token.status == true ? <ShowToken /> : ""}
    </div>
  );
}

export default App;
