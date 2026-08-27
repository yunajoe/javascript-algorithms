const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

class ArrayMake {
  constructor() {
    this.arr = new Array();
  }
  // 정수 A를 동적 배열의 맨 뒤에 넣는 연산
  pushBack(value) {
    this.arr.push(value);
  }
  // 맨 뒤에 있는 정수를 하나 삭제
  popBack() {
    this.arr.pop();
  }
  // 동적 배열에 들어있는 정수의 개수를 출력
  getSize() {
    console.log(this.arr.length);
  }

  //  k번째 숫자를 출력
  getValue(idx) {
    console.log(this.arr[idx - 1]);
  }
}

const arr = new ArrayMake();
commands.forEach((command) => {
  const [com, valueStr] = command.split(" ");
  const valueNum = Number(valueStr);
  if (com === "push_back") {
    arr.pushBack(valueNum);
  } else if (com === "pop_back") {
    arr.popBack();
  } else if (com === "size") {
    arr.getSize();
  } else if (com === "get") {
    arr.getValue(valueNum);
  }
});
