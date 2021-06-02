import * as React from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../redux/modules/todos/actions";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

interface Props {}

const TodoAppContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoAppContainer;
