import * as React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

interface Props {}

const TodoList: React.FC<Props> = () => {
  const todos = useSelector((state: any) => state.todos);
  return (
    <div className="main">
      {todos ? (
        <ul className="todo-list">
          {todos.map((todo: any) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default TodoList;
