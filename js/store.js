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

    // Step 15: [Part 4 - Store Class] Calculate total inventory value
    getInventoryValue() {
        let total = 0;
        this.inventory.forEach(product => {
            total += product.getTotalValue();
        });
        return total;
    }

        // Step 16: [Part 4 - Store Class] Find product by name
        findProductByName(name) {
            for (let product of this.inventory) {
                if (product.name.toLowerCase() === name.toLowerCase()) {
                    return product;
                }
            }
            return null;
        }
    
}
