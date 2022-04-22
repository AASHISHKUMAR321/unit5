import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 200px;
  height: 300px;
  margin: auto;
  margin-top: 10px;
  input {
    margin-top: 10px;
  }
`;

export const AddRes = () => {
  const [res, setRes] = useState({
    name: "",
    votes: "",
    reviews: "",
    categorys: "",
    costForOne: "",
    paymentMethods: "",
    image: "",
  });

  const handleChange = (e) => {
    const { className, value } = e.target;
    // {
    //   className == "categorys"
    //     ? setRes({ ...res, [className]: [...res.categorys, value] })
    //     : "";
    // }
    setRes({ ...res, [className]: value });
  };

  return (
    <Div>
      <h3>Add New Restaurant </h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(`http://localhost:8080/Restaurant`, res)
            .then((data) => console.log(data));
        }}
      >
        <input
          type="text"
          className="name"
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          type="number"
          className="votes"
          placeholder="Enter votes"
          onChange={handleChange}
        />
        <input
          type="number"
          className="reviews"
          placeholder="Enter reviews"
          onChange={handleChange}
        />
        <input
          type="text"
          className="categorys"
          placeholder="Enter categorys"
          onChange={handleChange}
        />
        <input
          type="number"
          className="costForOne"
          placeholder="Enter cost for one"
          onChange={handleChange}
        />
        <input
          type="text"
          className="paymentMethods"
          placeholder="payment methods"
          onChange={handleChange}
        />
        <input
          type="text"
          className="image"
          placeholder="enter image url"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </Div>
  );
};
