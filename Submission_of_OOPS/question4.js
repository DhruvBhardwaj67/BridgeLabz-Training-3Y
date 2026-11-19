
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name, "is doing employee work.");
    }
}

// Manager inherits Employee
class Manager extends Employee {

    work() {
        console.log(this.name, "is managing the team.");
    }
}

// Creating objects
let e1 = new Employee("Rahul", "IT");

let m1 = new Manager("Aman", "HR");

// Calling work() method
e1.work();
m1.work();
