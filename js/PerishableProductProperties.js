// PerishableProductProperties.js

import { ProductProperties } from './ProductProperties.js';

// Subclass representing perishable products
export class PerishableProductProperties extends ProductProperties {
    // Constructor to initialize inherited and new properties
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    // Override toString() to include expiration date
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}
