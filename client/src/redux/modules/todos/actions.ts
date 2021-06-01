export const TODOS_FETCH_REQUEST = "TODOS_FETCH_REQUEST";
export const TODOS_FETCH_SUCCESS = "TODOS_FETCH_SUCCESS";
export const TODOS_ADD_REQUEST = "TODOS_ADD_REQUEST";
export const TODOS_ADD_SUCCESS = "TODOS_ADD_SUCCESS";
export const TODOS_REMOVE_REQUEST = "TODOS_REMOVE_REQUEST";
export const TODOS_REMOVE_SUCCESS = "TODOS_REMOVE_SUCCESS";
export const TODOS_COMPLETE_REQUEST = "TODOS_COMPLETE_REQUEST";
export const TODOS_COMPLETE_SUCCESS = "TODOS_COMPLETE_SUCCESS";
export const TODOS_EDIT_REQUEST = "TODOS_EDIT_REQUEST";
export const TODOS_EDIT_SUCCESS = "TODOS_EDIT_SUCCESS";
export const TODOS_REMOVE_COMPLETED_REQUEST = "TODOS_REMOVE_COMPLETED_REQUEST";
export const TODOS_REMOVE_COMPLETED_SUCCESS = "TODOS_REMOVE_COMPLETED_SUCCESS";

export const fetchTodos = () => ({ type: TODOS_FETCH_REQUEST });
export const addTodo = (title: string) => ({ type: TODOS_ADD_REQUEST, title });
export const deleteTodo = (id: string) => ({ type: TODOS_REMOVE_REQUEST, id });
export const editTodo = (id: string, title: string) => ({
  type: TODOS_EDIT_REQUEST,
  id,
  title,
});
export const completeTodo = (id: string, isDone: boolean) => ({
  type: TODOS_COMPLETE_REQUEST,
  id,
  isDone,
});
export const removeCompleted = () => ({ type: TODOS_REMOVE_COMPLETED_REQUEST });
