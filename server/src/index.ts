import * as http from "http";
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "./controllers/TodoController";

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.url === "/api/todos" && req.method === "GET") {
    getTodos(req, res);
  } else if (req.url?.match(/\/api\/todos\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3]; // Get the id by split the url to an array.
    getTodo(req, res, id);
  } else if (req.url === "/api/todos" && req.method === "POST") {
    createTodo(req, res);
  } else if (req.url?.match(/\/api\/todos\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updateTodo(req, res, id);
  } else if (
    req.url?.match(/\/api\/todos\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = req.url.split("/")[3];
    deleteTodo(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(2404, () => console.log("Server started at port 2404"));
