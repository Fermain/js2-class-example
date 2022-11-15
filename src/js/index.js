// import storage from "./storage/index.js";
import ecommerce from "./api/service/index.js";

const samsungPhone = new ecommerce.Product("Phone", "Samsung", 3000, "https://picsum.photos/id/27/200/300");

const applePhone = new ecommerce.Product("Phone", "Apple", 30000, "https://picsum.photos/id/238/200/300");

const oppoPhone = new ecommerce.Product("Phone", "Oppo", 30, "https://picsum.photos/id/93/200/300");

const cowboyHat = new ecommerce.Product("Hat", "Cowboy", 1000, "https://picsum.photos/id/55/200/300");

const phoneShop = new ecommerce.Shop("kr", [samsungPhone, applePhone, oppoPhone, cowboyHat]);

const productsContainer = document.querySelector(".products");

phoneShop.products.forEach(product => product.render(productsContainer, phoneShop))

const numbers = [1, 2, 3];

const moreNumbers = [4, 5, 6];

const allTheNumbers = [...numbers, ...moreNumbers];

