import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    let id=setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
  }, []);
  return <div>Count:{counter}</div>;
};
