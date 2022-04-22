import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const ShowToken = () => {
  const { token } = useContext(AuthContext);
  return (
    <div>
      {console.log(token)}
      <h3>Token is:{token.token}</h3>
      <h4>{token.status ? "user Loged In " : ""}</h4>
    </div>
  );
};
