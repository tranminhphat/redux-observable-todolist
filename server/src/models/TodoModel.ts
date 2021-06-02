import ITodo from "src/interfaces/Todo.interface";
import todos from "../data/todo.json";
import writeDataToFile from "../utils/writeDataToFile";

export const findAll = () => {
  return new Promise<ITodo[]>((resolve, _) => {
    resolve(todos);
  });
};

export const findById = (id: string) => {
  return new Promise<ITodo | void>((resolve, reject) => {
    const todo = todos.find((p: ITodo) => p.id === id);
    if (todo) {
      resolve(todo);
    }
    reject();
  });
};

export const create = (newTodo: ITodo) => {
  return new Promise((resolve, _) => {
    todos.push(newTodo);
    writeDataToFile("todo.json", todos);
    resolve(newTodo);
  });
};

export const updateById = (
  id: string,
  todo: { title: string; isDone: string }
) => {
  return new Promise<ITodo>((resolve, _) => {
    const index = todos.findIndex((p: ITodo) => p.id === id);
    if (index !== -1) {
      todos[index] = { id, ...todo };
      writeDataToFile("todo.json", todos);
      resolve(todos[index]);
    }
  });
};

export const deleteById = (id: string) => {
  return new Promise<void>((resolve, _) => {
    const newTodos = todos.filter((p) => p.id !== id);
    writeDataToFile("todo.json", newTodos);
    resolve();
  });
};
