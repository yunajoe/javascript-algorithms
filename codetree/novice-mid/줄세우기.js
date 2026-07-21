const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
  const [height, weight] = input[i].split(" ").map(Number);
  students.push([height, weight, i]);
}

// Please Write your code here.
class Student {
  constructor(height, weight, num) {
    this.height = height;
    this.weight = weight;
    this.num = num;
  }

  static compareFunc(a, b) {
    if (a.height !== b.height) {
      return b.height - a.height;
    }
    if (a.weight !== b.weight) {
      return b.weight - a.weight;
    }
    return a.num - b.num;
  }
}
const arr = students.map(
  ([height, weight, num]) => new Student(height, weight, num),
);
arr.sort(Student.compareFunc);
arr.forEach((student) => {
  const { height, weight, num } = student;
  console.log(`${height} ${weight} ${num}`);
});
