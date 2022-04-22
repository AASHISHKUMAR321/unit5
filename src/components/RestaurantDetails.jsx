import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 600px;
  height: 350px;
  border: 1px solid black;
  margin: auto;

  img {
    width: 200px;
    height: 300px;
    float: right;
  }
`;

const ButtonDiv = styled.div`
  width: 40%;

  margin: auto;
  button {
    margin-left: 20px;
  }
`;
export const RestaurantDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Restaurant`)
      .then((data) => setData(data.data));

    return () => {
      console.log("clien up");
    };
  }, []);

  const handleSort = (value) => {
    setData([
      ...data
        .filter((data) => data.rating > value)
        .sort((a, b) => {
          return a.rating - b.rating;
        }),
    ]);
  };

  const handlePaymet = (method) => {
    {
      method
        ? setData(
            data.filter((data) => {
              console.log("method");
              if (data.payment_methods[method] == true) {
                return data;
              }
            })
          )
        : setData(data);
    }
  };
  const sortCost = (type) => {
    if (type == "asc") {
      setData([
        ...data.sort((a, b) => {
          return a.costForOne - b.costForOne;
        }),
      ]);
    } else {
      setData([...data.sort((a, b) => b.costForOne - a.costForOne)]);
    }
  };
  console.log(data);
  // consoe.le.log(
  //   data.filter((data) => console.log(data.payment_methods.card === true))
  // );

  return (
    <div>
      <ButtonDiv>
        <button onClick={() => handleSort(1)}>1 Star</button>
        <button onClick={() => handleSort(2)}>2 Star</button>
        <button onClick={() => handleSort(3)}>3 Star</button>
        <button onClick={() => handleSort(4)}>4 Star</button>
        <button onClick={() => handleSort(5)}>5 Star</button>
      </ButtonDiv>
      <ButtonDiv>
        <button
          onClick={() => {
            handlePaymet("card");
          }}
        >
          Card Only
        </button>
        <button onClick={() => handlePaymet("cash")}>Cash Only</button>
        <button onClick={() => handlePaymet()}>All</button>
      </ButtonDiv>
      <ButtonDiv>
        <button onClick={() => sortCost("dsc")}>High To Low</button>
        <button onClick={() => sortCost("asc")}>Low To High</button>
      </ButtonDiv>
      {data.map((e) => {
        return (
          <Card>
            <img src={e.src} alt="" />
            <p>{e.name}</p>
            <p>{e.cuisine}</p>
            <p>Cost for one{e.costForOne}</p>
            <p>min:{e.minOrder}</p>
            <p>upto{e.deliveryTime} min</p>
            <p>{e.deliveryTime ? "online Accept" : "cash only"}</p>
            <p>Rating :{e.rating}</p>
            <p>Votes:{e.votes}</p>
            <button>Order Online</button>
          </Card>
        );
      })}
    </div>
  );
};
