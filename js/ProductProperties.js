// ProductProperties.js

// Base class for all products
export class ProductProperties {
    // Constructor to initialize product properties
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to calculate total value of the product
    getTotalValue() {
        return this.price * this.quantity;
    }

    // Method to return a string representation of the product
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}
