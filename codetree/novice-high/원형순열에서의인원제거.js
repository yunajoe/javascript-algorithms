const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
// Please Write your code here.
const MAX_SIZE = 10000;
let answer = "";

class Queue {
  constructor() {
    this.q = Array.from({ length: MAX_SIZE }).fill(0);
    this.head = 0;
    this.tail = 0;
  }
  size() {
    // + MAX_SIZE: tail이 한 바퀴 돌아서 head보다 숫자가 작아졌을 때(음수가 될 때) 양수로 교정해 줌
    // % MAX_SIZE: 계산 결과가 배열의 범위를 벗어나지 않도록 안전하게 정리
    return (this.tail - this.head + MAX_SIZE) % MAX_SIZE;
  }
  empty() {
    return this.head === this.tail;
  }
  full() {
    // 다음 주자가 맨 앞(head)을 침범하려고 하면 꽉 찬 것이다
    return (this.tail + 1) % MAX_SIZE === this.head;
  }
  push(item) {
    if (this.full()) throw new Error("Queue is Full");
    // 데이터가 돌고 돌면서 앞쪽의 빈 공간을 계속 재사용할 수 있도록 길을 터주는 회전목마 역할
    this.tail = (this.tail + 1) % MAX_SIZE;
    this.q[this.tail] = item;
  }
  // 가장 처음에 있는 element를 return하고 빼버리는 메서드
  pop() {
    if (this.empty()) throw new Error("Queue is Empty");
    this.head = (this.head + 1) % MAX_SIZE;
    return this.q[this.head];
  }
  // 가장 처음에 있는 element return하는 메서드 (값만 return)
  front() {
    if (this.empty()) throw new Error("Queue is Empty");
    return this.q[(this.head + 1) % MAX_SIZE];
  }
}

const q = new Queue();

for (let i = 1; i <= n; i++) {
  q.push(i);
}
while (q.size() > 1) {
  for (let i = 0; i < k - 1; i++) {
    q.push(q.front());
    q.pop();
  }
  const result = q.pop();
  answer += `${result} `;
}

const result2 = q.pop();
answer += `${result2}`;
console.log(answer);
