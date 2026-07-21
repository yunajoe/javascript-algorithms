const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// Please Write your code here.
class Student {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  static compareByName(isAscending = true) {
    return (a, b) => {
      const result = a.name.localeCompare(b.name);
      return isAscending ? result : -result;
    };
  }

  static compareByHeight(isAscending = true) {
    return (a, b) => {
      const result = a.height - b.height;
      return isAscending ? result : -result;
    };
  }

  print() {
    console.log(`${this.name} ${this.height} ${this.weight.toFixed(1)}`);
  }

  static run(students) {
    console.log("name");
    [...students].sort(Student.compareByName(true)).forEach((s) => s.print());
    console.log("");
    console.log("height");
    [...students]
      .sort(Student.compareByHeight(false))
      .forEach((s) => s.print());
  }
}

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(" ");
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push(new Student(name, height, weight));
}

Student.run(students);
