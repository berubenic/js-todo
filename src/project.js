module.exports = class Project {
  constructor(name, description, todos = []) {
    this.name = name;
    this.description = description;
    this.todos = todos;
  }

  addTodo(todo) {
    // return error if todo already exists
    if (this.todos.includes(todo)) {
      return console.log("This todo already exists");
    }
    // add project to todo
    todo.project = this;
    // add todo to todos
    this.todos.push(todo);
  }

  removeTodo(todo) {
    // return error if todo doesn't exist
    if (!this.todos.includes(todo)) {
      return console.log("This todo does not exist");
    }
    // set todo project to none
    todo.project = null;
    // remove from project todos
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
};
