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
};
