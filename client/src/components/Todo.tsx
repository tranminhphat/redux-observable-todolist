import * as React from "react";
import { useDispatch } from "react-redux";
import ITodo from "../interfaces/Todo.interface";
import { deleteTodo, updateTodo } from "../redux/modules/todos/actions";

interface Props {
  todo: ITodo;
}

const Todo: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleDoneTodo = () => {
    dispatch(
      updateTodo(
        todo.id,
        todo.title,
        todo.isDone === "false" ? "true" : "false"
      )
    );
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li
      style={{
        marginTop: "8px",
        textDecoration: todo.isDone === "true" ? "line-through" : "",
      }}
    >
      <div style={{ display: "flex" }}>
        <label>{todo.title}</label>
        <div style={{ marginLeft: "50px" }}>
          <button onClick={handleToggleDoneTodo} style={{ marginRight: "8px" }}>
            {todo.isDone === "false" ? "done" : "re-done"}
          </button>
          <button onClick={handleDeleteTodo}>delete</button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
