import axios from "axios";
import React, { useEffect, useState } from "react";
import { Item } from "./Item";

export const Input = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const [page, setPage] = useState(1);
  const toggle = (e) => {
    const update = { status: !e.status };

    axios
      .patch(`http://localhost:8080/todos/${e.id}`, update)
      .then((data) => complete(data.data));

    // axios.delete(`http://localhost:8080/todos/${e.id}`).then(() => getTodo());
  };

  //   console.log(done);
  useEffect(() => {
    console.log("mounted");
    getTodo();
    // getDone();
    return () => {
      console.log("Unmounted");
    };
  }, []);

  const getDone = () => {
    axios.get(`http://localhost:8080/done`).then((data) => setDone(data.data));
    //don data is here i need to call a function that will set the state of done
  };
  const getTodo = () => {
    axios.get(`http://localhost:8080/todos`).then((data) => setTodo(data.data));
  };
  const complete = (data) => {
    axios
      .post(`http://localhost:8080/done`, data)
      .then((data) => del(data.data));
  };

  const del = (data) => {
    axios
      .delete(`http://localhost:8080/todos/${data.id}`)
      .then(() => getTodo());
  };
  console.log("Done", done);
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Write Somthing"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          const payload = { title: text, status: false };
          axios.post(`http://localhost:8080/todos`, payload).then(() => {
            getTodo();
          });
        }}
      >
        +
      </button>
      <Item Item={todo} toggle={toggle} del={del} />

      <button onClick={() => getDone()}>Show Completed To-Dos</button>
      <Item Item={done} />
    </div>
  );
};
