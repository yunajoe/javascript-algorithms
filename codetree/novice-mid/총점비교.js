const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift());
const studentData = input.map((line) => line.split(" "));

// Please write your code here.
class Student {
  constructor(name, kor, eng, math) {
    this.name = name;
    this.kor = Number(kor);
    this.eng = Number(eng);
    this.math = Number(math);
  }
  get total() {
    return this.kor + this.eng + this.math;
  }
  static sortByAsc(a, b) {
    return a.total - b.total;
  }
}

const s = studentData.map(
  ([name, kor, eng, math]) => new Student(name, kor, eng, math),
);
s.sort(Student.sortByAsc);

s.forEach((item) => {
  const { name, kor, eng, math } = item;
  console.log(`${name} ${kor} ${eng} ${math}`);
});
