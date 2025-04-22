// Step 5: [Part 1 - Base Class] Import ProductProperties class
import { ProductProperties } from './ProductProperties.js';

// Step 6: [Part 1 - Output] Define helper to log messages to console and DOM
function logOutput(message) {
    console.log(message); // Dev console
    const output = document.getElementById('output');
    output.textContent += message + '\n';
}

// Step 7: [Part 1 - Base Class] Create sample ProductProperties objects
const product1 = new ProductProperties('Apple', 2.5, 50);
const product2 = new ProductProperties('Notebook', 1.2, 100);

// Step 8: [Part 1 - Base Class] Log string info and total values
logOutput(product1.toString());
logOutput(`Total Value: $${product1.getTotalValue().toFixed(2)}`);

logOutput(product2.toString());
logOutput(`Total Value: $${product2.getTotalValue().toFixed(2)}`);

// Step 10: [Part 2 - Inheritance] Import PerishableProductProperties subclass
import { PerishableProductProperties } from './PerishableProductProperties.js';

// Step 11: [Part 2 - Inheritance] Create perishable product instances
const milk = new PerishableProductProperties('Milk', 1.5, 10, '2024-12-31');
const yogurt = new PerishableProductProperties('Yogurt', 2.0, 5, '2024-11-15');

// Step 12: [Part 2 - Inheritance] Log perishable product info and values
logOutput(milk.toString());
logOutput(`Total Value: $${milk.getTotalValue().toFixed(2)}`);

logOutput(yogurt.toString());
logOutput(`Total Value: $${yogurt.getTotalValue().toFixed(2)}`);
