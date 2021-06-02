import ITodo from "../../../interfaces/Todo.interface";
import {
  TODOS_ADD_SUCCESS,
  TODOS_DELETE_SUCCESS,
  TODOS_FETCH_SUCCESS,
  TODOS_UPDATE_SUCCESS,
} from "./actions";

const todoReducers = (state = [], action: any) => {
  switch (action.type) {
    case TODOS_FETCH_SUCCESS:
      return [...state, ...action.payload];
    case TODOS_ADD_SUCCESS:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case TODOS_UPDATE_SUCCESS:
      return state.map((t: ITodo) => {
        if (t.id === action.payload.id) {
          return action.payload;
        }
        return t;
      });
    case TODOS_DELETE_SUCCESS:
      return state.filter((t: ITodo) => t.id !== action.payload);
    default:
      return state;
  }
};
export default todoReducers;
