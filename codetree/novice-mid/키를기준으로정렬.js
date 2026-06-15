const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

class Student {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}
const students = [];
for (let i = 1; i <= n; i++) {
  const info = input[i].split(" ");
  const [name, height, weight] = info;
  students.push(new Student(name, parseInt(height), parseInt(weight)));
}
// Please Write your code here.

students.sort((a, b) => a.height - b.height);

students.forEach(({ name, height, weight }) => {
  console.log(`${name} ${height} ${weight}`);
});
