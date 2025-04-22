// Step 13: [Part 4 - Store Class] Define the Store class
export class Store {
    
    // Step 13: [Part 4 - Store Class] Constructor initializes inventory array
    constructor() {
        // The store starts with an empty list of products
        this.inventory = [];
    }

    // Step 14: [Part 4 - Store Class] Method to add a product to inventory
    addProduct(product) {
        // Add the given product to the inventory list
        this.inventory.push(product);
    }

    // Step 15: [Part 4 - Store Class] Calculate total inventory value
    getInventoryValue() {
        let total = 0;

        // Add the total value of each product to the total
        this.inventory.forEach(product => {
            total += product.getTotalValue();
        });

        return total;
    }

    // Step 16: [Part 4 - Store Class] Find product by name
    findProductByName(name) {
        // Search the inventory for a product that matches the name (case-insensitive)
        for (let product of this.inventory) {
            if (product.name.toLowerCase() === name.toLowerCase()) {
                return product; // Found it
            }
        }

        // If no product found, return null
        return null;
    }
}
