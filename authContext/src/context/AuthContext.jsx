import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState({ token: "", status: false });
  const isAuth = () => {
    axios
      .post(`https://reqres.in/api/login`, {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((data) =>
        setToken({ ...token, token: data.data.token, status: true })
      );
  };
  //   console.log(token);
  const ToggleAuth = () => {};
  return (
    <AuthContext.Provider value={{ isAuth, ToggleAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
};
