const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

class Student {
  constructor(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
  }
}

const comp = (a, b) => {
  if (a.kor !== b.kor) {
    return b.kor - a.kor;
  }
  if (a.eng !== b.eng) {
    return b.eng - a.eng;
  }
  return b.math - a.math;
};

// Please Write your code here.

const students = rawStudentData.map((student) => {
  const [name, kor, eng, math] = student.split(" ");
  return new Student(name, kor, eng, math);
});
const sortedStudents = students.sort(comp);

sortedStudents.forEach(({ name, kor, eng, math }) => {
  console.log(`${name} ${kor} ${eng} ${math}`);
});
