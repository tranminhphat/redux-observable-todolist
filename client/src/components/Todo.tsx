import * as React from "react";
import ITodo from "../interfaces/Todo.interface";

interface Props {
  toDo: ITodo;
}

const Todo: React.FC<Props> = ({ toDo }) => (
  <li className={toDo.isDone === "true" ? "completed" : ""}>
    <div className="view">
      <label>{toDo.title}</label>
    </div>
  </li>
);

export default Todo;
