import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  let ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      //   setCounter((p) => p + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h3>Counter{counter}</h3>
      <button
        onClick={() => {
          clearInterval(ref.current);
        }}
      >
        Pause
      </button>
    </div>
  );
};
