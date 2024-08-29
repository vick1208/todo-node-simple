import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((req, res) => {

    res.setHeader("Content-Type","application/json");

  if (req.method === "GET") {
    service.getTodolist(req, res);
  }
  if (req.method === "POST") {
    service.createTodolist(req,res);
  }
  if (req.method === "PUT") {
    service.updateTodolist(req,res);
  }
  if (req.method === "DELETE") {
    service.deleteTodo(req,res);
  }
});

server.listen(3000);
