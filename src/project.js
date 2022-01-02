export class Project {
  constructor(name, description, todos = []) {
    this.name = name;
    this.description = description;
    this.todos = todos;
  }
}
