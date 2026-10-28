
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];
const errors = {
    negativeAmount: [],
    missingProperty: [],
    nullEntry: []
};

for (const transaction of transactions) {
    try {
        debugger;

        if (transaction === null) {
            throw new TypeError("Null transaction entry");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new ReferenceError("Missing amount or id");
        }

        if (transaction.amount < 0) {
            throw new RangeError("Negative amount");
        }

        valid.push(transaction);
    } catch (error) {
        invalid.push({
            transaction,
            error: error.message
        });

        if (error instanceof TypeError) {
            errors.nullEntry.push(transaction);
        } else if (error instanceof ReferenceError) {
            errors.missingProperty.push(transaction);
        } else if (error instanceof RangeError) {
            errors.negativeAmount.push(transaction);
        }
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Negative Amount Errors:", errors.negativeAmount);
console.log("Missing Property Errors:", errors.missingProperty);
console.log("Null Entry Errors:", errors.nullEntry);
console.log(`Successful Transactions: ${valid.length}`);
console.log(`Failed Transactions: ${invalid.length}`);
