const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// 국어, 영어, 수학 (우선순위)
// Please Write your code here.

class Student {
  constructor(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
  }
}

function camp(a, b) {
  if (a.kor !== b.kor) {
    return b.kor - a.kor;
  }

  if (a.eng !== b.eng) {
    return b.eng - a.eng;
  }
  return b.math - a.math;
}

const result = [];
for (const data of rawStudentData) {
  const [name, kor, eng, math] = data.split(" ");
  const s = new Student(name, kor, eng, math);
  result.push(s);
}
result.sort(camp);
for (const data of result) {
  const { name, kor, eng, math } = data;
  console.log(name, kor, eng, math);
}
