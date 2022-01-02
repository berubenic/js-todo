import Todo from "./todo.js";
import Project from "./project.js";
import TodoAlert from "./TodoAlert.js";

const someTask = new Todo("Walk the doggo");

//  change date
someTask.dueDate = "12/12/21";
// change description
someTask.description = "Some description";

const project = new Project("Dog Tasks");

// add task to project
project.addTodo(someTask);
// remove task from project
project.removeTodo(someTask);
