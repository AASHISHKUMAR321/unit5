import React, { useEffect, useState } from "react";

export const Timer = ({ start, end }) => {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    let id = setInterval(() => {
      if (counter == 10) return;
      setCounter((prev) => {
        if (prev == Math.floor(end / 60)) {
          clearInterval(id);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return <div>{<h1>Counter:{counter}</h1>}</div>;
};
