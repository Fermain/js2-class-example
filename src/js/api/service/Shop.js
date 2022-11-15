import storage from "../../storage/index.js";
import { Order } from "./Order.js";
import { User } from "./User.js";

function delay(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}

export default class Shop {
  constructor(currency, products, cartContents = []) {
    this.currency = currency;
    this.products = products;
    this.createCart(cartContents)
  }

  get total() {
    return this.cart.map(product => product.price).reduce((total, current) => total + current, 0)
  }

  get totalFormatted() {
    return `${this.total.toLocaleString()}${this.currency}`;
  }

  get cart() {
    return storage.load("cart")
  }

  set cart(cartContents = []) {
    storage.save("cart", cartContents);
  }

  createCart(cartContents = []) {
    this.cart = cartContents;
  }

  addToCart(product) {
    this.cart = [...this.cart, product];
    console.log(this);
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(product => product.id !== productId)
  }
  
  async checkout() {
    await delay(3)
    const order = new Order(this.cart, new User("Oliver"));
    this.cart = [];
    return order;
  }
}





