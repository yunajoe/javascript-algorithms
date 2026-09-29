# 덱(Deque) 정리

## 1. 덱이란?

**덱(Deque, Double-Ended Queue)은 양쪽 끝에서 모두 데이터의 삽입과 삭제가 가능한 자료구조**이다.

- 큐(Queue)와 스택(Stack)의 특징을 모두 합친 형태이다.
- 앞(Front)과 뒤(Back) 어느 곳으로든 데이터를 넣고 뺄 수 있다.
- 일상생활에서 양쪽으로 사람이 타고 내릴 수 있는 터널이나 양방향 레일 구조를 연상하면 쉽다.

예를 들어, 앞쪽으로 `1`을 넣고 뒤쪽으로 `2`를 넣는 등 양방향 조작이 모두 가능하다.

## 2. 덱의 주요 연산

| 연산          | 설명                               |
| ------------- | ---------------------------------- |
| `pushFront()` | 덱의 **앞쪽(Front)**에 데이터 추가 |
| `pushBack()`  | 덱의 **뒤쪽(Back)**에 데이터 추가  |
| `popFront()`  | 덱의 **앞쪽(Front)** 데이터 제거   |
| `popBack()`   | 덱의 **뒤쪽(Back)** 데이터 제거    |
| `front()`     | 덱의 맨 앞 데이터 확인             |
| `back()`      | 덱의 맨 뒤 데이터 확인             |
| `empty()`     | 덱이 비어 있는지 확인              |
| `size()`      | 덱에 들어있는 데이터의 수 반환     |

## 3. 배열로 덱을 구현할 때의 문제점

JavaScript의 기본 배열을 이용해 덱을 구현할 때 `push()`와 `pop()`은 평균 $O(1)$이지만, 앞쪽에 데이터를 추가하거나 제거하는 **`unshift()`와 `shift()`를 사용하면 $O(n)$의 시간 복잡도**가 발생한다.

- 배열의 맨 앞에 요소를 추가(`unshift`)하거나 제거(`shift`)할 때마다 나머지 모든 요소들의 인덱스를 이동시켜야 하기 때문이다.
- 따라서 덱의 모든 연산을 $O(1)$로 보장하려면 **이중 연결 리스트(Doubly Linked List)** 또는 **원형 덱(Circular Deque)** 구조를 사용하는 것이 효율적이다.

## 4. 덱을 활용하는 대표적인 알고리즘

### 슬라이딩 윈도우 (Sliding Window Maximum)

덱은 고정된 크기의 윈도우를 이동시키면서 최댓값이나 최솟값을 구할 때 매우 유용하게 쓰인다.

- 윈도우를 한 칸씩 이동할 때 범위를 벗어난 앞쪽 데이터를 `popFront()`로 제거하고, 새로운 데이터를 뒤쪽에서 관리(`pushBack()`)하여 불필요한 반복 연산을 제거한다.

## 5. 큐(Queue) vs 스택(Stack) vs 덱(Deque) 비교

세 자료구조의 핵심적인 차이점을 한눈에 비교할 수 있는 표입니다.

| 구분     | 스택 (Stack)                      | 큐 (Queue) | 덱 (Deque) |
| -------- | --------------------------------- | ---------- | ---------- |
| **특징** | **LIFO** (Last In, First Out)<br> |

<br>후입선출 | **FIFO** (First In, First Out)<br>

<br>선입선출 | **양방향** (Double-Ended)<br>

<br>선입선출 + 후입선출 모두 가능 |
| **데이터 입출력 위치** | 한쪽 끝에서만 삽입과 삭제 | 한쪽에서는 삽입, 반대쪽에서는 삭제 | 양쪽 끝(앞/뒤)에서 모두 삽입과 삭제 |
| **주요 연산 (Push)** | `push()` (Top에 추가) | `push()` (Rear에 추가) | `pushFront()`, `pushBack()` |
| **주요 연산 (Pop)** | `pop()` (Top에서 제거) | `pop()` (Front에서 제거) | `popFront()`, `popBack()` |
| **시간 복잡도 (효율적 구현 시)** | 모든 연산 $O(1)$ | 모든 연산 $O(1)$ | 모든 연산 $O(1)$ |
| **대표 활용 사례** | - 함수 호출 스택 (Call Stack)<br>

<br>- DFS (깊이 우선 탐색)<br>

<br>- 실행 취소(Undo) | - BFS (너비 우선 탐색)<br>

<br>- 작업 대기열 (Task Queue)<br>

<br>- 프린터 인쇄 대기 | - 슬라이딩 윈도우 알고리즘<br>

<br>- 덱을 이용한 구현이 필요한 큐/스택 대체 |

## 6. deque 구현 방법

### 배열을 이용하여 구현

```javascript
const MAX_SIZE = 10000;

class Deque {
  constructor() {
    // 빈 덱 하나를 생성합니다.
    this.q = Array(MAX_SIZE).fill(0);
    this.head = 0;
    this.tail = 0;
  }

  pushFront(item) {
    // 덱의 맨 앞에 데이터를 추가합니다.
    if (this.full()) throw new Error("Deque is full");

    this.head = (this.head - 1 + MAX_SIZE) % MAX_SIZE;
    this.q[this.head] = item;
  }

  pushBack(item) {
    // 덱의 맨 뒤에 데이터를 추가합니다.
    if (this.full()) throw new Error("Deque is full");

    this.q[this.tail] = item;
    this.tail = (this.tail + 1) % MAX_SIZE;
  }

  full() {
    // 덱이 가득 차 있으면 true를 반환합니다.
    return (this.tail + 1) % MAX_SIZE === this.head;
  }

  empty() {
    // 덱이 비어있으면 true를 반환합니다.
    return this.head === this.tail;
  }

  size() {
    // 덱이 들어있는 데이터 수를 반환합니다.
    return (this.tail - this.head + MAX_SIZE) % MAX_SIZE;
  }

  popFront() {
    // 덱의 맨 앞에 있는 데이터를 반환하고 제거합니다.
    if (this.empty()) throw new Error("Deque is empty");

    const item = this.q[this.head];
    this.head = (this.head + 1) % MAX_SIZE;
    return item;
  }

  popBack() {
    // 덱의 맨 뒤에 있는 데이터를 반환하고 제거합니다.
    if (this.empty()) throw new Error("Deque is empty");

    this.tail = (this.tail - 1 + MAX_SIZE) % MAX_SIZE;
    return this.q[this.tail];
  }

  front() {
    // 덱의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
    if (this.empty()) throw new Error("Deque is empty");

    return this.q[this.head];
  }

  back() {
    // 덱의 맨 뒤에 있는 데이터를 제거하지 않고 반환합니다.
    if (this.empty()) throw new Error("Deque is empty");

    return this.q[(this.tail - 1 + MAX_SIZE) % MAX_SIZE];
  }
}
```

### 연결 리스트(LinkedList)를 이용하여 구현

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    // 빈 덱 하나를 생성합니다.
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  pushFront(item) {
    // 덱의 맨 앞에 데이터를 추가합니다.
    let x = new Node(item);

    if (this.count === 0) {
      // 덱이 비어있다면 head와 tail을 모두 x로 설정합니다.
      this.head = x;
      this.tail = x;
    } else {
      // 덱에 기존 값이 있다면 head를 x로 변경합니다.
      this.head.prev = x;
      x.next = this.head;
      this.head = x;
    }
    this.count++; // 덱의 크기를 1 증가시킵니다.
  }

  pushBack(item) {
    // 덱의 맨 뒤에 데이터를 추가합니다.
    let x = new Node(item);

    if (this.count === 0) {
      // 덱이 비어있다면 head와 tail을 모두 x로 설정합니다.
      this.head = x;
      this.tail = x;
    } else {
      // 덱에 기존 값이 있다면 tail을 x로 변경합니다.
      this.tail.next = x;
      x.prev = this.tail;
      this.tail = x;
    }
    this.count++; // 덱의 크기를 1 증가시킵니다.
  }

  empty() {
    // 덱이 비어있으면 true를 반환합니다.
    return this.count === 0;
  }

  size() {
    // 덱에 들어있는 데이터 수를 반환합니다.
    return this.count;
  }

  popFront() {
    // 덱의 맨 앞에 있는 데이터를 반환하고 제거합니다.
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    let x = this.head;
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = x.next;
      this.head.prev = null;
    }
    this.count--;
    return x.value;
  }

  popBack() {
    // 덱의 맨 뒤에 있는 데이터를 반환하고 제거합니다.
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    let x = this.tail;
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = x.prev;
      this.tail.next = null;
    }
    this.count--;
    return x.value;
  }

  front() {
    // 덱의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    return this.head.value;
  }

  back() {
    // 덱의 맨 뒤에 있는 데이터를 제거하지 않고 반환합니다.
    if (this.empty()) {
      throw new Error("Deque is empty");
    }
    return this.tail.value;
  }
}
```
