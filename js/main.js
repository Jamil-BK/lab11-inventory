// main.js

import { ProductProperties } from './ProductProperties.js';

// Helper function to log to both console and DOM
function logOutput(message) {
    console.log(message); // Dev console
    const output = document.getElementById('output');
    output.textContent += message + '\n';
}

// Sample products
const product1 = new ProductProperties('Apple', 2.5, 50);
const product2 = new ProductProperties('Notebook', 1.2, 100);

// Output for product1
logOutput(product1.toString());
logOutput(`Total Value: $${product1.getTotalValue().toFixed(2)}`);

// Output for product2
logOutput(product2.toString());
logOutput(`Total Value: $${product2.getTotalValue().toFixed(2)}`);
