
let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 },
    { name: "Sandwich", price: 80 }
];

function calculateBill(orderItems) {

    // Get prices using map()
    let prices = orderItems.map(item => {
        let food = menu.find(m => m.name === item);

        if (!food) {
            throw new Error(item + " is not available!");
        }

        return food.price;
    });

    // Calculate total using reduce()
    let total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

// Test order
try {
    let order = ["Pizza", "Burger", "Pasta"];

    let bill = calculateBill(order);

    console.log("Order:", order);
    console.log("Total Bill: Rs.", bill);

} catch (error) {
    console.log("Error:", error.message);
}
