
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (const employee of employees) {
        if (!employee || !employee.name || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error(`Invalid numeric data for ${employee.name}`);
        }

        const bonus = salary * (years > 3 ? 0.1 : 0.05);
        const totalSalary = salary + bonus;

        console.log(`Employee: ${employee.name}`);
        console.log(`Salary: Rs. ${salary.toFixed(2)}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: Rs. ${bonus.toFixed(2)}`);
        console.log(`Total Salary: Rs. ${totalSalary.toFixed(2)}`);
        console.log("--------------------------");
    }
} catch (error) {
    console.error("Error:", error.message);
}
