import React from "react";
import { useState } from "react";

export const Forms = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    address: "",
    Department: "",
    salary: "",
    marital: false,
  });

  const handle = (e) => {
    const { id, value } = e.target;

    setUser({ ...user, [id]: value });
  };
  console.log(user);
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submited");
      }}
    >
      <h1>Please Enter your Deatis</h1>
      <label>
        Name:
        <input
          type="text"
          placeholder="Enter Your name here"
          id="name"
          onChange={handle}
        />
      </label>
      <label>
        age:
        <input
          type="number"
          placeholder="Enter Your age here"
          id="age"
          onChange={handle}
        />
      </label>
      <label>
        address:
        <input
          type="text"
          placeholder="Enter Your Address here"
          id="address"
          onChange={handle}
        />
      </label>

      <select name="Department" id="Department" onChange={(e) => handle(e)}>
        <option value="">___</option>
        <option value="Goverment">Goverment</option>
        <option value="Private">Private</option>
      </select>
      <label>
        salary:
        <input
          type="number"
          placeholder="Enter Your Salary here"
          id="salary"
          onChange={handle}
        />
      </label>
      <label htmlFor="">
        marital state:
        <input
          type="checkbox"
          id="marital"
          value={true}
          onClick={(e) => console.log(e.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};
