import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import todosEpic from "./todos/epics";
import todosReducer from "./todos/reducers";

export const rootEpic = combineEpics(todosEpic);

export const rootReducer = combineReducers({
  todos: todosReducer,
});
