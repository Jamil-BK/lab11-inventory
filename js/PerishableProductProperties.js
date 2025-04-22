// Step 7: [Part 2 - Inheritance] Import the base ProductProperties class
import { ProductProperties } from "./ProductProperties.js";

// Step 8: [Part 2 - Inheritance] Define the subclass for perishable products
export class PerishableProductProperties extends ProductProperties {
  // Step 8: [Part 2 - Inheritance] Constructor adds an expiration date to the product
  constructor(name, price, quantity, expirationDate) {
    // Call the parent class to set name, price, and quantity
    super(name, price, quantity);

    // Add the extra property for perishable products
    this.expirationDate = expirationDate;
  }

  // Step 9: [Part 2 - Inheritance] Show product details with expiration date included
  toString() {
    // Add expiration date to the string from the base class
    return `Product: ${this.name}, Price: $${this.price.toFixed(
      2
    )}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
  }
}
