
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    const isInvalid = value === null || value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        Number.isNaN(numberValue) ||
        (typeof value === "string" && value.trim() === "100px");

    const report = {
        Original: String(value),
        Number: numberValue,
        Boolean: booleanValue,
        String: stringValue,
        Status: isInvalid ? "Invalid" : "Valid"
    };

    if (isInvalid) {
        invalidNumbers.push(report);
    } else {
        validNumbers.push(numberValue);
    }

    console.log(`${isInvalid ? "❌" : "✅"} ${JSON.stringify(report)}`);
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
