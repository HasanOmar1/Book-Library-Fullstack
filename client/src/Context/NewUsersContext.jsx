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

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      const parsedUser = JSON.parse(loggedUser);
      setCurrentUser(parsedUser);
    }
  }, []);

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
      setCurrentUser(response.data);
      const userJSON = JSON.stringify(response.data);
      localStorage.setItem("user", userJSON);
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
      }}
    >
      {children}
    </NewUsersContext.Provider>
  );
}

export const useNewUsersContext = () => useContext(NewUsersContext);
