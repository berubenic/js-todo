import Todo from "./todo.js";
import Project from "./project.js";
import TodoAlert from "./TodoAlert.js";

const someTask = new Todo("Walk the doggo");

console.log(someTask.title);

someTask.dueDate = "12/12/21";

console.log(someTask.dueDate);

console.log(someTask.project);

const project = new Project("Dog Tasks");

project.addTodo(someTask);

console.log(project.todos);

console.log(someTask.project);
