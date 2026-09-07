const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.nodeNum = 0;
  }

  // 원소를 첫번째 위치에 넣는다.
  pushFront(newData) {
    const newNode = new Node(newData); // 새로운 노드 생성
    newNode.next = this.head; // 새로운 노드의 next값들 이전 노드와 연결
    if (this.head != null) {
      // head에 연결된 기존 노드가 있는 경우
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      // head에 연결된 기존 노드가 없는 경우
      // 만약 this.tail을 설정해주지 않으면, tail은 여전히 빈 상태(null)로 남게 됩니다. 이 상태에서 생기는 문제들은 다음과 같습니다:
      // 나중에 데이터를 뒤에 추가(pushBack)할 때: tail이 비어있기 때문에 어디에 새 노드를 붙여야 할지 알 수 없어 에러가 나거나 리스트가 망가집니다.
      // 리스트의 끝을 다룰 때: 양방향 연결 리스트는 보통 head와 tail을 양옆의 앵커(기준점)로 삼아 관리하는데, tail이 실종되면 리스트의 구조가 깨집니다.
      // 따라서 데이터가 하나도 없던 빈 리스트에 첫 노드가 들어올 때는 "이 노드가 우리의 시작(head)이자 끝(tail)이야" 하고 둘 다 지정해 주어야 정상적으로 양방향 연결 리스트가 유지될 수 있습니다.
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.prev = null;
    this.nodeNum += 1;
  }

  // 원소를 맨 끝 위치에 넣어줍니다.
  pushBack(newData) {
    const newNode = new Node(newData);
    newNode.prev = this.tail; // 새로운 노드의 이전 prev값들을 이전 노드와 연결
    // newNode를 새롭게 구성한 상태: (head) prev data1 next => prev data2 next (tail)  => prev newNode next;

    if (this.tail != null) {
      // 현재 tail의 next에 nexNode 연결
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = null;
    this.nodeNum += 1;
  }

  // 첫 번째 수를 빼면서 동시에 그 수를 반환합니다.
  popFront() {
    if (this.head == null) {
      console.log("List is empty");
      // 노드가 하나 남았을 경우
    } else if (this.head.next == null) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.nodeNum = 0;
      return temp.data;
    } else {
      //  head ──> [data1] <==> [data2] ──> tail
      const temp = this.head;
      // 해석: data1의 다음 노드(즉, data2)의 prev를 null로 바꿉니다. data2는 이제 앞에 있던 data1과의 연결을 끊고 prev가 null이 됩니다. (새로운 head가 될 준비 완료!)
      //   null [data2] next ──> tail
      temp.next.prev = null; // 새로 head가 될 노드의 prev값을 지워줍니다.
      // 리스트의 시작점(head)을 기존 data1의 다음 노드인 data2로 갈아끼웁니다.
      this.head = temp.next; // head값을 새로 갱신

      // 1번째 노드(temp, 즉 data1)의 next를 null로 끊어버립니다.  결과 상태: data1은 뒤에 있던 data2를 더 이상 붙잡고 있지 않고 완전히 독립(고립)됩니다.
      //temp.next = null까지 해주는 이유는 리스트가 망가지는 것을 막기 위해서라기보다, 버려지는 노드에 대한 클린업(디버깅 및 메모리 위생) 차원
      temp.next = null;
      this.nodeNum -= 1;
      return temp.data;
    }
  }
  // 맨 끝에 있는 수를 빼면서 동시에 그 수를 반환
  popBack() {
    if (this.tail == null) {
      console.log("List is empty");
      //  head ──> [data1] ──> tail
    } else if (this.tail.prev == null) {
      const temp = this.tail;
      this.head = null;
      this.tail = null;
      this.nodeNum = 0;
      return temp.data;
    } else {
      //   head ──> [data1] <==> [data2] ──> tail
      const temp = this.tail;
      //   head ──> [data1]
      temp.prev.next = null;
      //    head ──> [data1] -> tail
      this.tail = temp.prev; //  tail값을 새로 갱신해주고
      //  이전 tail의 prev 값을 지워줍니다.
      temp.prev = null;

      this.nodeNum -= 1;
      return temp.data;
    }
  }

  size() {
    return this.nodeNum;
  }
  empty() {
    return this.nodeNum == 0 ? 1 : 0;
  }
  // 첫번째 수 반환
  front() {
    if (this.head == null) {
      console.log("List is empty");
    } else {
      return this.head.data;
    }
  }
  //맨 끝에 있는 수를 반환
  back() {
    if (this.tail == null) {
      console.log("List is empty");
    } else {
      return this.tail.data;
    }
  }
}

const dL = new DoublyLinkedList();
for (const command of commands) {
  const [c, value] = command.split(" ");
  const numValue = Number(value);
  if (c === "push_front") {
    dL.pushFront(numValue);
  } else if (c === "push_back") {
    dL.pushBack(numValue);
  } else if (c === "pop_front") {
    console.log(dL.popFront());
  } else if (c === "pop_back") {
    console.log(dL.popBack());
  } else if (c === "size") {
    console.log(dL.size());
  } else if (c === "empty") {
    console.log(dL.empty());
  } else if (c === "front") {
    console.log(dL.front());
  } else if (c === "back") {
    console.log(dL.back());
  }
}
