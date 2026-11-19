function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

let student1 = new Student("Pranjal", "CSE");

student1.showName();
student1.showBranch();

console.log(student1 instanceof Person);
console.log(student1 instanceof Student);