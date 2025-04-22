// Step 13: [Part 4 - Store Class] Define the Store class
export class Store {
    
    // Step 13: [Part 4 - Store Class] Constructor initializes inventory array
    constructor() {
        this.inventory = [];
    }

    // Step 14: [Part 4 - Store Class] Method to add a product to inventory
    addProduct(product) {
        this.inventory.push(product);
    }
}
