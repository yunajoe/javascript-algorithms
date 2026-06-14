const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

class Person {
  constructor(name, addr, city) {
    this.name = name;
    this.addr = addr;
    this.city = city;
  }
}
// Please Write your code here.
const persons = personLines.map((person) => {
  const [name, addr, city] = person.split(" ");
  return new Person(name, addr, city);
});

// 오름차순 정리
persons.sort((a, b) => b.name.localeCompare(a.name));

for (const property in persons[0]) {
  console.log(property, persons[0][property]);
}
