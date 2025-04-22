// Step 5: [Part 1 - Base Class] Import ProductProperties class
import { ProductProperties } from './ProductProperties.js';

// Step 10: [Part 2 - Inheritance] Import PerishableProductProperties subclass
import { PerishableProductProperties } from './PerishableProductProperties.js';

// Step 17: [Part 5 - Testing] Import Store class
import { Store } from './store.js';

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

// Step 11: [Part 2 - Inheritance] Create perishable product instances
const milk = new PerishableProductProperties('Milk', 1.5, 10, '2024-12-31');
const yogurt = new PerishableProductProperties('Yogurt', 2.0, 5, '2024-11-15');

// Step 12: [Part 2 - Inheritance] Log perishable product info and values
logOutput(milk.toString());
logOutput(`Total Value: $${milk.getTotalValue().toFixed(2)}`);

logOutput(yogurt.toString());
logOutput(`Total Value: $${yogurt.getTotalValue().toFixed(2)}`);

// Step 13: [Part 3 - Static Method] Apply 15% discount to all products
const allProducts = [product1, product2, milk, yogurt];
ProductProperties.applyDiscount(allProducts, 0.15);

// Step 14: [Part 3 - Static Method] Log updated product info after discount
logOutput('\n--- After 15% Discount ---');
allProducts.forEach(product => {
    logOutput(product.toString());
    logOutput(`Total Value: $${product.getTotalValue().toFixed(2)}\n`);
});

// Step 18: [Part 5 - Testing] Create Store object and add all products
const store = new Store();
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(milk);
store.addProduct(yogurt);

// Step 19: [Part 5 - Testing] Display inventory value after discount (from store)
logOutput('\n--- Inventory Value After Discount (via Store) ---');
logOutput(`Total Inventory Value: $${store.getInventoryValue().toFixed(2)}`);


