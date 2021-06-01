import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/modules/todos/actions";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

interface Props {}

const TodoAppContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => {
    console.log(state);
    return state.todos;
  });
  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  console.log(todos);
  return (
    <div>
      <TodoInput />
      {todos ? <TodoList todos={todos} /> : "...loading"}
    </div>
  );
};

export default TodoAppContainer;
