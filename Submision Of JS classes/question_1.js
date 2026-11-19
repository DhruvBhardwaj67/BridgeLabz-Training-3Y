
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: Rs.${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Mouse", 800, "Accessories"),
    new Product(4, "Keyboard", 2000, "Accessories")
];

products[0].applyDiscount(10);

products.filter(product => product.price > 1000).forEach(product => {
    console.log(product.displayDetails());
});
