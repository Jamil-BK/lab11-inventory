// PerishableProductProperties.js

import { ProductProperties } from './ProductProperties.js';

// Subclass representing perishable products
export class PerishableProductProperties extends ProductProperties {
    // Constructor to initialize inherited and new properties
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // Call parent constructor
        this.expirationDate = expirationDate; // New property
    }
}
