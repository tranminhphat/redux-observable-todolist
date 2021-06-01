import * as React from "react";
import ITodo from "../interfaces/Todo.interface";
import Todo from "./Todo";

interface Props {
  todos: ITodo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="main">
      <input className="toggle-all" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} toDo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
