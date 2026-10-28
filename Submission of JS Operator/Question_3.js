
let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);

let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log("===== Math Utility Dashboard =====");
console.log(`Original Number: ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Cube (x^3): ${cube.toFixed(3)}`);
console.log(`Random Number (10-50): ${randomNumber}`);
