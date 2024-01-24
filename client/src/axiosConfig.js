import axios from "axios";

const usersApi = import.meta.env.VITE_USERS_API;

const instance = axios.create({
  baseURL: usersApi,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
