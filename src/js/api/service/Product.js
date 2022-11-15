export default class Product {
  constructor(name, brand, price, image = "https://picsum.photos/id/237/200/300") {
    this.id = crypto.randomUUID()
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.image = image;
  }

  get template() {
    return `<div class="col-12 col-md-6 col-lg-4 mb-3 product"><div class="card">
    <img src="${this.image}" alt="Example Image" class="card-img">
    <div class="card-header">${this.name} by ${this.brand}</div>
    <div class="list-group list-group-flush">
      <div class="list-group-item">Feature A</div>
      <div class="list-group-item">Feature B</div>
      <div class="list-group-item">Feature C</div>
    </div>
    <div class="card-footer">
      <div class="btn-group btn-group-sm">
        <a href="/product?id=${this.id}" class="btn btn-success">View Product</a>
        <button class="btn btn-outline-success" data-cart="add" data-id="${this.id}">Add to Cart</button>
      </div>
    </div>
  </div>
</div>`
  }

  render(parent = document.body, shop) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html")
    const element = doc.querySelector('.product');
    const addToCartButton = element.querySelector('button[data-cart="add"]');
    addToCartButton.addEventListener("click", () => shop.addToCart(this))
    parent.append(element);
  }
}
