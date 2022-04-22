import React from "react";

export const ShowItem = ({ e, toggle, del }) => {
  return (
    <div className="showItem">
      <div>
        <input type="checkbox" className="checkbox" onClick={() => toggle(e)} />
        <span>{e.title}</span>
        <button onClick={() => del(e)}>Remove</button>
      </div>
    </div>
  );
};
