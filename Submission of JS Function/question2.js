function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

let numbers = [1, 2, 3, 4];

let double = applyOperation(numbers, num => num * 2);
let square = applyOperation(numbers, num => num * num);

console.log("Double:", double);
console.log("Square:", square);