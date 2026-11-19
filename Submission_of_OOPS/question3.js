
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method
Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;

    return this.price - discount;
};

// Creating 3 products
let p1 = new Product("Laptop", 50000);
let p2 = new Product("Mobile", 20000);
let p3 = new Product("Headphones", 5000);

// Applying different discounts
console.log(p1.name, "Final Price:", p1.applyDiscount(10));

console.log(p2.name, "Final Price:", p2.applyDiscount(20));

console.log(p3.name, "Final Price:", p3.applyDiscount(15));
