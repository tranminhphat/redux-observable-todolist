import * as React from "react";

interface Props {}

const TodoInput: React.FC<Props> = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" />
    </header>
  );
};

export default TodoInput;
