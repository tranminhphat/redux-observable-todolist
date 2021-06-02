import { combineEpics, ofType } from "redux-observable";
import { from } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import * as Api from "../../../api/todos";
import {
  addTodoSuccess,
  deleteTodoSuccess,
  fetchTodosSuccess,
  TODOS_ADD_REQUEST,
  TODOS_DELETE_REQUEST,
  TODOS_FETCH_REQUEST,
  TODOS_UPDATE_REQUEST,
  updateTodoSuccess,
} from "./actions";

const fetchTodos = (action$: any) =>
  action$.pipe(
    ofType(TODOS_FETCH_REQUEST),
    mergeMap(() =>
      from(Api.fetchTodos()).pipe(
        map((response) => fetchTodosSuccess(response.data))
      )
    )
  );

const addTodo = (action$: any) =>
  action$.pipe(
    ofType(TODOS_ADD_REQUEST),
    mergeMap((action: any) =>
      from(Api.addTodo(action.title)).pipe(
        map((response) => addTodoSuccess(response.data))
      )
    )
  );

const updateTodo = (action$: any) =>
  action$.pipe(
    ofType(TODOS_UPDATE_REQUEST),
    mergeMap((action: any) =>
      from(Api.updateTodo(action.id, action.title, action.isDone)).pipe(
        map((response) => updateTodoSuccess(response.data))
      )
    )
  );

const deleteTodo = (action$: any) =>
  action$.pipe(
    ofType(TODOS_DELETE_REQUEST),
    mergeMap((action: any) =>
      from(Api.deleteTodo(action.id)).pipe(
        map((response) => deleteTodoSuccess(response.data.id))
      )
    )
  );

export default combineEpics(fetchTodos, addTodo, updateTodo, deleteTodo);
