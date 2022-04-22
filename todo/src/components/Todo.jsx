import React, { useState } from "react";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState();
  const payload = { title: text, status: false, id: Math.random() };
  const toggle = (item) => {
    // {todo.map((e)=>{e.id==id ? e:})}
    setTodo(
      todo.map((e) => (e.id === item.id ? { ...e, status: !e.status } : e))
    );
  };
  console.log(todo);

  return (
    <div>
      <TodoList todo={todo} toggle={toggle} />
      <div className="input">
        <input
          type="text"
          placeholder="Write Somthing"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodo([...todo, payload]);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
