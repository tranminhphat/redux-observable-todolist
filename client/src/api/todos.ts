import axios from "axios";

const configureAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:2404/api",
});

export const fetchTodos = () => {
  return configureAxios.get("/todos");
};
