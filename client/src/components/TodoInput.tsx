import * as React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos/actions";

interface Props {}

const TodoInput: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      dispatch(addTodo(event.target.value.trim()));
      event.target.value = "";
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default TodoInput;
