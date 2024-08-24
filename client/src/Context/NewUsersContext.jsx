import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import { useNavigate } from "react-router-dom";
const NewUsersContext = createContext();

export default function NewUsersProvider({ children }) {
  const [users, setUsers] = useState({});
  const [currentUser, setCurrentUser] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [loginStatus, setLoginStatus] = useState(true);
  const [registerStatus, setRegisterStatus] = useState(true);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      currentLoggedUser();
    }
  }, [token]);

  //fetch users
  async function usersAPI() {
    try {
      const response = await axios.get("/users");
      setUsers(response.data);
    } catch (error) {
      // console.log(error.response.data.message);
      setErrorMsg(error.response.data.message);
    }
  }

  async function userLogin(user) {
    setLoginStatus(false);
    try {
      const response = await axios.post("/users/login", user);
      localStorage.setItem("token", response.data.token);
      setLoginStatus(true);
      navigate("/");
    } catch (error) {
      // console.log(error.response.data.message);
      setErrorMsg(error.response.data.message);
    } finally {
      setLoginStatus(true);
    }
  }

  async function createUser(user) {
    setRegisterStatus(false);

    try {
      await axios.post("/users/create", user);
      setRegisterStatus(true);
      navigate("/login");
    } catch (error) {
      // console.log(error.response.data.message);
      setErrorMsg(error.response.data.message);
    } finally {
      setRegisterStatus(true);
    }
  }

  async function currentLoggedUser() {
    try {
      const { data } = await axios.get("/users/currentUser");
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
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
        loginStatus,
        registerStatus,
        currentLoggedUser,
      }}
    >
      {children}
    </NewUsersContext.Provider>
  );
}

export const useNewUsersContext = () => useContext(NewUsersContext);
