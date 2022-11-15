export class User {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID()
  }
}