const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
// Please Write your code here.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  // 덱의 맨 뒤에 데이터를 추가
  pushBack(item) {
    const newNode = new Node(item);
    if (this.count === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode; // head 업데이트!
    }
    this.count++;
  }
  //  덱의 맨 앞에 데이터를 추가
  pushFront(item) {
    const newNode = new Node(item);
    if (this.count === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // head => 1 => 2
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode; // head 업데이트!
    }
    this.count++;
  }
  size() {
    return this.count;
  }
  empty() {
    return this.count === 0;
  }
  // 덱의 맨 앞에 있는 데이터를 반환하고 제거합
  popFront() {
    // head => 1 => 2 =>3
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    const copyHead = this.head;
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = copyHead.next;
      this.head.prev = null;
    }

    this.count--;
    return copyHead.value;
  }
  // 덱의 맨 뒤에 있는 데이터를 반환하고 제거
  popBack() {
    // head => 1 => 2 =>3
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    const copyTail = this.tail;
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = copyTail.prev;
      this.tail.next = null;
    }

    this.count--;

    return copyTail.value;
  }
  // 덱의 맨 앞에 있는 데이터를 제거하지 않고 반환
  front() {
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    return this.head.value;
  }
  // 덱의 맨 뒤에 있는 데이터를 제거하지 않고 반환합
  back() {
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    return this.tail.value;
  }
}

const d = new Deque();
for (let i = 0; i < n; i++) {
  d.pushBack(i + 1);
}

while (d.size() > 1) {
  d.popFront();
  const value = d.popFront();
  d.pushBack(value);
}
console.log(d.front());
