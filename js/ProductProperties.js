// Step 1: [Part 1 - Base Class] Define the base ProductProperties class
export class ProductProperties {
  // Step 2: [Part 1 - Base Class] Constructor to set product name, price, and quantity
  constructor(name, price, quantity) {
    // These values are saved in the object when it's created
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Step 3: [Part 1 - Base Class] Calculates the total value of this product
  getTotalValue() {
    // Multiply price by quantity to get total value
    return this.price * this.quantity;
  }

  // Step 4: [Part 1 - Base Class] Shows the product information as a sentence
  toString() {
    // Makes a readable string showing product name, price, and quantity
    return `Product: ${this.name}, Price: $${this.price.toFixed(
      2
    )}, Quantity: ${this.quantity}`;
  }

  // Step 11: [Part 3 - Static Method] Apply a discount to all products in a list
  static applyDiscount(products, discount) {
    // Go through each product and reduce its price based on the discount
    products.forEach((product) => {
      product.price = product.price * (1 - discount);
    });
  }
}
