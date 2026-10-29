
let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

let passedStudents = scores.filter(score => score >= 50);
let passCount = passedStudents.length;

let scoreReport = scores.map((score, index) =>
    `Student ${index + 1}: ${score}`
);

console.log("===== Student Performance Summary =====");
console.log(scoreReport.join("\n"));
console.log("---------------------------------------");
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passCount}`);
console.log(`Students Failed: ${scores.length - passCount}`);
