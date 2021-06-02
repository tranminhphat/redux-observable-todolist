import { IncomingMessage, ServerResponse } from "http";
import { v4 as uuidv4 } from "uuid";
import * as TodoModel from "../models/TodoModel";
import getTodoData from "../utils/getTodoData";

/**
 *  @description Get all todos
 *  @route GET: /api/todos
 */
export const getTodos = async (_req: IncomingMessage, res: ServerResponse) => {
  try {
    const todos = await TodoModel.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Can not retrieve todos" }));
  }
};

/**
 *  @description Get single todo
 *  @route GET: /api/todo/:id
 */
export const getTodo = async (
  _req: IncomingMessage,
  res: ServerResponse,
  id: string
) => {
  try {
    const todo = await TodoModel.findById(id);
    if (!todo) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo is not exist" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(todo));
    }
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Can not retrieve todo" }));
  }
};

/**
 *  @description Create a new todo
 *  @route POST: /api/todos
 */
export const createTodo = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const body = await getTodoData(req);
    const { title, isDone } = JSON.parse(body);
    const newTodo = await TodoModel.create({ id: uuidv4(), title, isDone });
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newTodo));
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Can not create todo" }));
  }
};

/**
 *  @description Update single todo
 *  @route PUT: /api/todos/:id
 */
export const updateTodo = async (
  req: IncomingMessage,
  res: ServerResponse,
  id: string
) => {
  try {
    const todo = await TodoModel.findById(id);
    if (!todo) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo is not exist" }));
    } else {
      const body = await getTodoData(req);
      const { title, isDone } = JSON.parse(body);
      const updatedProperties = {
        title: title || todo.title,
        isDone: isDone || todo.isDone,
      };
      const updatedTodo = await TodoModel.updateById(id, updatedProperties);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updatedTodo));
    }
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Can not update todo" }));
  }
};

/**
 *  @description Delete single todo
 *  @route DELETE: /api/todo/:id
 */
export const deleteTodo = async (
  _req: IncomingMessage,
  res: ServerResponse,
  id: string
) => {
  try {
    const todo = await TodoModel.findById(id);
    if (!todo) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo is not exist" }));
    } else {
      await TodoModel.deleteById(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ id, message: `Product ${id} has been deleted` })
      );
    }
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Can not delete todo" }));
  }
};
