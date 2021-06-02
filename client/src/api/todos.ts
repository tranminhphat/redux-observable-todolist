import axios, { AxiosResponse } from "axios";
import ITodo from "../interfaces/Todo.interface";

const configureAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:2404/api",
});

export const fetchTodos = (): Promise<AxiosResponse<ITodo[]>> => {
  return configureAxios.get("/todos");
};

export const addTodo = (title: string) => {
  return configureAxios.post("/todos", { title, isDone: "false" });
};

export const updateTodo = (id: string, title?: string, isDone?: string) => {
  return configureAxios.put(`/todos/${id}`, {
    title,
    isDone,
  });
};

export const deleteTodo = (id: string) => {
  return configureAxios.delete(`/todos/${id}`);
};
