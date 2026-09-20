const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.

class Queue {
  constructor() {
    this.items = [];
  }
  push(A) {
    this.items.push(A);
  }
  pop() {
    // 빈 배열일때 처리
    if (this.empty()) {
      throw new Error("empty");
    }
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
  empty() {
    return this.size() === 0 ? 1 : 0;
  }
  front() {
    return this.items[0];
  }
}

const que = new Queue();
for (const command of commands) {
  const [c, v] = command.split(" ");
  if (c === "push") {
    que.push(v);
  } else if (c === "pop") {
    console.log(que.pop());
  } else if (c === "size") {
    console.log(que.size());
  } else if (c === "empty") {
    console.log(que.empty());
  } else if (c === "front") {
    console.log(que.front());
  }
}
