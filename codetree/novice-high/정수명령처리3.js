const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.
class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class Deque {
  constructor() {
    this.count = 0; // 현재 길이
    this.head = null; // deque의 head
    this.tail = null; // deque의 tail
  }
  //  정수 A를 덱의 앞에 넣습니다.
  pushFront(value) {
    const newNode = new Node(value);
    if (this.count === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode; // 쌍방향
      this.head = newNode;
    }
    this.count++;
  }
  // 정수 A를 덱의 뒤에 넣습니다.
  pushBack(value) {
    const newNode = new Node(value);
    if (this.count === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.count++;
  }
  // 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력
  popFront() {
    if (this.empty()) {
      throw new Error("Deque is empty");
    }

    const tempHead = this.head;
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = tempHead.next;
      this.head.prev = null;
    }
    this.count--;
    return tempHead.value;
  }
  popBack() {
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    const tempTail = this.tail;
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // head => 1 => 2 => 3
      this.tail = tempTail.prev;
      this.tail.next = null;
    }
    this.count--;
    return tempTail.value;
  }
  front() {
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    return this.head.value;
  }
  back() {
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    return this.tail.value;
  }
  size() {
    return this.count;
  }
  empty() {
    return this.count === 0;
  }
}

const d = new Deque();

for (const command of commands) {
  const [c, value] = command.split(" ");
  if (c === "push_front") {
    d.pushFront(value);
  } else if (c === "push_back") {
    d.pushBack(value);
  } else if (c === "pop_front") {
    console.log(d.popFront());
  } else if (c === "pop_back") {
    console.log(d.popBack());
  } else if (c === "size") {
    console.log(d.size());
  } else if (c === "empty") {
    const result = d.empty();
    if (result) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else if (c === "front") {
    console.log(d.front());
  } else if (c === "back") {
    console.log(d.back());
  }
}
