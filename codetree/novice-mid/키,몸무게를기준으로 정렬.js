const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// Please Write your code here.
// 키를 기준으로 오름차순으로 정렬하여 출력하는 프로그램
// 단, 키가 동일한 경우에는 몸무게가 더 큰 사람이 먼저 나오도록 정렬

class Student {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
  print() {
    console.log(this.name, this.height, this.weight);
  }

  static sortCom() {
    return (a, b) => {
      if (a.height !== b.height) return a.height - b.height;
      return b.weight - a.weight;
    };
  }
  static run(students) {
    const result = students.sort(this.sortCom());
    result.forEach((s) => {
      s.print();
    });
  }
}

const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push(new Student(name, Number(height), Number(weight)));
}

Student.run(records);
