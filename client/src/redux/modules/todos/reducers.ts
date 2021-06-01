import {
  TODOS_ADD_REQUEST,
  TODOS_COMPLETE_REQUEST,
  TODOS_EDIT_REQUEST,
  TODOS_FETCH_REQUEST,
  TODOS_FETCH_SUCCESS,
  TODOS_REMOVE_COMPLETED_REQUEST,
  TODOS_REMOVE_REQUEST,
} from "./actions";

const todoReducers = (state = {}, action: any) => {
  switch (action.type) {
    case TODOS_FETCH_REQUEST:
    case TODOS_ADD_REQUEST:
    case TODOS_REMOVE_REQUEST:
    case TODOS_COMPLETE_REQUEST:
    case TODOS_REMOVE_COMPLETED_REQUEST:
    case TODOS_EDIT_REQUEST:
      return {
        ...state,
      };
    case TODOS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default todoReducers;
