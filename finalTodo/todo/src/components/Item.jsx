import React from "react";
import { ShowItem } from "./ShowItem";
import { v4 as uuidv4 } from "uuid";

export const Item = ({ Item, toggle, del }) => {
  return (
    <div>
      {Item.map((e) => (
        <ShowItem e={e} toggle={toggle} del={del} key={uuidv4()} />
      ))}
    </div>
  );
};
