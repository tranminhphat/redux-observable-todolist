import { combineEpics, ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";
import * as Api from "../../../api/todos";
import { TODOS_FETCH_REQUEST, TODOS_FETCH_SUCCESS } from "./actions";

const fetchTodos = (action$: any) =>
  action$.pipe(
    ofType(TODOS_FETCH_REQUEST),
    mergeMap(async () => await Api.fetchTodos()),
    map((response) => {
      console.log(response);
      return { type: TODOS_FETCH_SUCCESS, payload: response };
    })
  );

// const addTodo = action$ =>
//   action$.ofType(TODOS_ADD_REQUEST)
//     .mergeMap(action =>
//       ajax.post('http://localhost:3001/todos', {
//         text: action.text,
//         completed: false,
//       }, { 'Content-Type': 'application/json' })
//         .map(({ response }) => ({ type: TODOS_ADD_SUCCESS, id: response.id, text: action.text }))
//         .catch(createErrorAction('Failed to add a new task')),
//     );

// const removeTodo = action$ =>
//   action$.ofType(TODOS_REMOVE_REQUEST)
//     .mergeMap(action =>
//       ajax.delete(`http://localhost:3001/todos/${action.id}`)
//         .map(() => ({ type: TODOS_REMOVE_SUCCESS, id: action.id }))
//         .catch(createErrorAction(`Failed to remove task #${action.id}`)),
//     );

// const completeTodo = action$ =>
//   action$.ofType(TODOS_COMPLETE_REQUEST)
//     .mergeMap(action =>
//       ajax.patch(`http://localhost:3001/todos/${action.id}`, {
//         completed: !action.completed,
//       }, { 'Content-Type': 'application/json' })
//         .map(() => ({ type: TODOS_COMPLETE_SUCCESS, id: action.id }))
//         .catch(createErrorAction(`Failed to mark task #${action.id} as completed`)),
//     );

// const removeCompletedTodos = (action$, { getState }) =>
//   action$.ofType(TODOS_REMOVE_COMPLETED_REQUEST)
//     .mergeMap(() => Observable.forkJoin(
//         ...getState().todos.data.filter(todo => todo.completed).map(todo =>
//           ajax.delete(`http://localhost:3001/todos/${todo.id}`),
//         ),
//       )
//       .map(() => ({ type: TODOS_REMOVE_COMPLETED_SUCCESS }))
//       .catch(createErrorAction('Failed to remove all completed tasks')),
//     );

// const editTodo = action$ =>
//   action$.ofType(TODOS_EDIT_REQUEST)
//     .mergeMap(action =>
//       ajax.patch(`http://localhost:3001/todos/${action.id}`, {
//         text: action.text,
//       }, { 'Content-Type': 'application/json' })
//         .map(() => ({ type: TODOS_EDIT_SUCCESS, id: action.id, text: action.text }))
//         .catch(createErrorAction(`Failed to edit task #${action.id}`)),
//     );

export default combineEpics(
  fetchTodos
  // addTodo,
  // removeTodo,
  // completeTodo,
  // removeCompletedTodos,
  // editTodo,
);
