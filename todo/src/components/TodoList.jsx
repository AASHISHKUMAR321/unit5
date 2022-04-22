import React from "react";
import { TodoItem } from "./TodoItem";
export const TodoList = ({ todo, toggle }) => {
  return (
    <div>
      {todo.map((e) => (
        <TodoItem item={e} toggle={toggle} />
      ))}
    </div>
  );
};
