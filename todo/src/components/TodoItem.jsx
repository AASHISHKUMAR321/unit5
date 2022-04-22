import React from "react";

export const TodoItem = ({ item, toggle }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <span>{item.status ? "done" : "not done"}</span>
      <button onClick={() => toggle(item)}>Toggle</button>
    </div>
  );
};
