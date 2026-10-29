let userName = "Pranjal";
let age = 21;
let isStudent = true;
let subjects = ["JavaScript", "Python", "SQL"];
let user = { city: "Mathura", course: "B.Tech" };
let middleName = null;
let address;

let report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Middle Name", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "Address", Value: address, Type: typeof address }
];

console.table(report);
