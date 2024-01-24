import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import { useNavigate } from "react-router-dom";
const NewUsersContext = createContext();

export default function NewUsersProvider({ children }) {
  const [users, setUsers] = useState({});
  const [currentUser, setCurrentUser] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      const parsedUser = JSON.parse(loggedUser);
      setCurrentUser(parsedUser);
    }

    usersAPI();
  }, []);

  //fetch users
  async function usersAPI() {
    try {
      const response = await axios.get("/users");
      // console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error.response.data.message);
      setErrorMsg(error.response.data.message);
    }
  }

  async function userLogin(user) {
    try {
      const response = await axios.post("/users/login", user);
      console.log(response.data);
      setCurrentUser(response.data);
      const userJSON = JSON.stringify(response.data);
      localStorage.setItem("user", userJSON);
      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
      setErrorMsg(error.response.data.message);
    }
  }

  async function createUser(user) {
    try {
      const response = await axios.post("/users/create", user);
      // console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data.message);
      setErrorMsg(error.response.data.message);
    }
  }

  return (
    <NewUsersContext.Provider
      value={{
        users,
        userLogin,
        createUser,
        currentUser,
        setCurrentUser,
        errorMsg,
        setErrorMsg,
        usersAPI,
      }}
    >
      {children}
    </NewUsersContext.Provider>
  );
}

export const useNewUsersContext = () => useContext(NewUsersContext);
