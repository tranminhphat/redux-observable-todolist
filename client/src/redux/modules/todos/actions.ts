import ITodo from "../../../interfaces/Todo.interface";

export const TODOS_FETCH_REQUEST = "TODOS_FETCH_REQUEST";
export const TODOS_FETCH_SUCCESS = "TODOS_FETCH_SUCCESS";
export const TODOS_ADD_REQUEST = "TODOS_ADD_REQUEST";
export const TODOS_ADD_SUCCESS = "TODOS_ADD_SUCCESS";
export const TODOS_UPDATE_REQUEST = "TODOS_UPDATE_REQUEST";
export const TODOS_UPDATE_SUCCESS = "TODOS_UPDATE_SUCCESS";
export const TODOS_DELETE_REQUEST = "TODOS_DELETE_REQUEST";
export const TODOS_DELETE_SUCCESS = "TODOS_DELETE_SUCCESS";

export const fetchTodos = () => ({ type: TODOS_FETCH_REQUEST });
export const fetchTodosSuccess = (payload: ITodo[]) => ({
  type: TODOS_FETCH_SUCCESS,
  payload,
});
export const addTodo = (title: string) => ({
  type: TODOS_ADD_REQUEST,
  title,
});
export const addTodoSuccess = (payload: ITodo) => ({
  type: TODOS_ADD_SUCCESS,
  payload,
});
export const updateTodo = (id: string, title?: string, isDone?: string) => ({
  type: TODOS_UPDATE_REQUEST,
  id,
  title,
  isDone,
});
export const updateTodoSuccess = (payload: ITodo) => ({
  type: TODOS_UPDATE_SUCCESS,
  payload,
});
export const deleteTodo = (id: string) => ({
  type: TODOS_DELETE_REQUEST,
  id,
});
export const deleteTodoSuccess = (payload: string) => ({
  type: TODOS_DELETE_SUCCESS,
  payload,
});
