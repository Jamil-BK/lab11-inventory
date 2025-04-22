// Step 1: [Part 1 - Base Class] Define the base ProductProperties class
export class ProductProperties {
    
    // Step 2: [Part 1 - Base Class] Constructor to initialize product properties
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Step 3: [Part 1 - Base Class] Method to calculate total value of the product
    getTotalValue() {
        return this.price * this.quantity;
    }

    // Step 4: [Part 1 - Base Class] Method to return a string representation of the product
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    // Step 11: [Part 3 - Static Method] Apply discount to an array of products
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = product.price * (1 - discount);
        });
    }
}
