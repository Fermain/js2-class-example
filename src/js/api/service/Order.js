export class Order {
  constructor(products, user) {
    this.id = crypto.randomUUID()
    this.created = new Date();
    this.products = products;
    this.user = user;
    this.status = "Pending";
  }

  get total() {
    return this.products.map(product => product.price).reduce((total, current) => total + current, 0)
  }

  get totalFormatted() {
    return `${this.total.toLocaleString()}${this.currency}`;
  }

  changeStatus(status) {
    this.status = status;
  }
}