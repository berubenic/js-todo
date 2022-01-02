module.exports = class Todo {
  constructor(
    title,
    description = null,
    dueDate = "",
    priority = 2,
    checked = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
  }

  delete() {
    // if belongs to project, remove from project todos
    if (this.project) {
      this.project.removeTodo(this);
    }
  }

  setPriority(number) {
    if (number < 1 || number > 3) {
      return console.log("Priority has to be between 1 and 3");
    }
    this.priority = number;
  }
};
