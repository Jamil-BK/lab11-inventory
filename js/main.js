// main.js

import { ProductProperties } from './ProductProperties.js';

// Sample products
const product1 = new ProductProperties('Apple', 2.5, 50);
const product2 = new ProductProperties('Notebook', 1.2, 100);

// Log total value
console.log(product1.getTotalValue());  // Should be 125.00
console.log(product2.getTotalValue());  // Should be 120.00

// Log string representation
console.log(product1.toString());
console.log(product2.toString());
