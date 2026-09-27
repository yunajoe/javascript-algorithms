# 큐(Queue) 정리

## 1. 큐란?

**큐(Queue)는 먼저 들어온 데이터가 먼저 나가는 자료구조**이다.

- **FIFO (First In, First Out)**: 선입선출
- 먼저 들어온 데이터가 먼저 제거됨
- 일상생활에서 줄 서기와 같은 구조

예를 들어, `1 → 2 → 3` 순서로 데이터가 들어오면, 나갈 때도 `1 → 2 → 3` 순서로 나간다.

## 2. 큐의 주요 연산

| 연산        | 설명                    |
| ----------- | ----------------------- |
| `push()`    | 큐의 뒤쪽에 데이터 추가 |
| `pop()`     | 큐의 앞쪽 데이터 제거   |
| `front()`   | 큐의 맨 앞 데이터 확인  |
| `back()`    | 큐의 맨 뒤 데이터 확인  |
| `isEmpty()` | 큐가 비어 있는지 확인   |

## 3. 배열로 큐를 구현하면 왜 비효율적일까?

JavaScript 배열을 이용하면 `push()`와 `shift()`로 큐를 간단하게 구현할 수 있다.

```javascript
const queue = [1, 2, 3, 4, 5];

queue.push(6); // 뒤에 추가
queue.shift(); // 앞의 데이터 제거
```

문제는 **`shift()` 연산**이다.

배열의 맨 앞 요소를 제거하면, 나머지 요소들의 인덱스를 한 칸씩 앞으로 옮겨야 한다.

### `shift()`가 동작하는 과정

초기 배열:

```text
[1, 2, 3, 4, 5]
```

`shift()`로 `1`을 제거하면:

```text
[2, 3, 4, 5]
```

이때 나머지 요소들의 인덱스가 변경된다.

```text
제거 전:  0   1   2   3   4
         [1,  2,  3,  4,  5]

제거 후:  0   1   2   3
         [2,  3,  4,  5]
```

즉, 앞의 요소를 제거할 때마다 나머지 요소들을 이동시키는 작업이 발생할 수 있다.

| 연산      | 시간 복잡도 |
| --------- | ----------- |
| `push()`  | 평균 O(1)   |
| `shift()` | O(n)        |

데이터가 `n`개라면, `shift()` 한 번에 최대 O(n)의 작업이 필요할 수 있다.

큐에서 데이터를 계속 제거해야 하는 상황이라면, 이러한 비용이 누적되어 비효율적일 수 있다.

## 4. 더 효율적인 큐 구현 방법

배열에서 실제 데이터를 매번 제거하는 대신, **앞쪽을 가리키는 인덱스(`front`)를 이동**시키는 방법을 사용할 수 있다.

```javascript
const queue = [1, 2, 3, 4, 5];

let front = 0;

// 큐의 맨 앞 데이터 확인
console.log(queue[front]); // 1

// 큐에서 데이터 제거한 것처럼 처리
front++;

console.log(queue[front]); // 2
```

`front++`만 수행하면 되므로 큐에서 데이터를 꺼내는 작업을 O(1)에 처리할 수 있다.

단, 이 방식은 배열에서 데이터를 실제로 삭제하는 것은 아니다. 사용이 끝난 데이터가 배열에 남아 있을 수 있으므로, 메모리 관리가 필요한 경우 이를 고려해야 한다.

## 5. 큐를 활용하는 대표적인 알고리즘

### BFS (너비 우선 탐색)

큐는 BFS에서 탐색할 노드를 관리할 때 사용된다.

- 먼저 발견한 노드를 먼저 탐색
- 큐에 노드를 추가하고 앞에서부터 꺼내 탐색
- 가중치가 없는 그래프에서 최단 거리 탐색 등에 활용

## 6. 큐(Queue)의 주요 5가지 연산

큐를 이용할 때 주로 사용되는 기본 연산은 다음과 같습니다.

- **`push(E)`**: 큐의 맨 뒤에 데이터 E를 추가합니다.

- **`size()`**: 현재 큐에 들어있는 데이터의 수를 반환합니다.

- **`empty()`**: 큐가 비어있으면 `true`, 아니면 `false`를 반환합니다.

- **`front()`**: 큐의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.

- **`pop()`**: 큐의 맨 앞에 있는 데이터를 반환하고 동시에 큐에서 제거합니다.

## 7. 큐의 구현 방식과 발전 과정

### 기본 배열을 이용한 큐 (비효율성 문제)

- `pop()` 구현 시 배열의 맨 앞 원소를 제거하기 위해 `shift()` 함수를 사용합니다.

- 하지만 `shift()` 함수는 뒤의 모든 원소를 한 칸씩 당겨와야 하므로 **$O(n)$의 시간복잡도**를 가집니다.

- 타 언어의 큐(`pop`이 $O(1)$로 동작)와 비교했을 때 성능상 비효율적입니다.

```javascript
class Queue {
  constructor() {
    // 빈 큐 하나를 생성합니다.
    this.q = [];
  }

  push(item) {
    // 큐의 맨 뒤에 데이터를 추가합니다.
    this.q.push(item);
  }

  empty() {
    // 큐가 비어있으면 true를 반환합니다.
    return this.q.length === 0;
  }

  size() {
    // 큐에 들어있는 데이터 수를 반환합니다.
    return this.q.length;
  }

  pop() {
    // 큐의 맨 앞에 있는 데이터를 반환하고 제거합니다.
    if (this.empty()) {
      throw new Error("Queue is empty");
    }
    return this.q.shift();
  }

  front() {
    // 큐의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
    if (this.empty()) {
      throw new Error("Queue is empty");
    }
    return this.q[0];
  }
}

const q = new Queue(); // 정수를 관리할 queue를 선언합니다. => 빈 큐
q.push(3);
q.push(5);
q.push(9);

console.log(q.front()); // 가장 앞에 있는 원소를 출력합니다. => 3
q.pop(); // 가장 앞에 있는 원소를 제거합니다.
console.log(q.size()); // 원소의 개수를 출력합니다 => 2
while (!q.empty()) {
  // 가장 앞에 있는 원소부터 순서대로 출력합니다.
  console.log(q.front()); // 순서대로 5 9 출력됩니다.
  q.pop(); // 가장 앞에 있는 원소를 제거합니다.
}
```

### 선형 큐 (Linear Queue)

- 배열을 그대로 쓰되, `head`와 `tail` 포인터를 두어 맨 앞 원소를 직접 당겨오는 대신 포인터를 이동시키는 방식을 사용합니다.

- 이를 통해 `pop()` 연산을 **$O(1)$의 시간복잡도**로 개선할 수 있습니다.

- **한계**: 실제 배열에서 값이 삭제되는 것이 아니기 때문에 `head` 이전에 위치한 공간은 사용되지 않고 버려져 **메모리를 많이 차지한다**는 단점이 있습니다.

```javascript
class Queue {
  constructor() {
    // 빈 큐 하나를 생성합니다.
    this.q = [];
    this.head = -1; // head는 큐의 가장 첫 원소의 위치 바로 앞을 가리킵니다.
    this.tail = -1; // tail은 큐의 가장 마지막 원소의 위치를 가리킵니다.
  }

  push(item) {
    // 큐의 맨 뒤에 데이터를 추가합니다.
    this.q.push(item);
    this.tail++;
  }

  empty() {
    // 큐가 비어있으면 true를 반환합니다.
    return this.head === this.tail;
  }

  size() {
    // 큐에 들어있는 데이터 수를 반환합니다.
    return this.tail - this.head;
  }

  pop() {
    // 큐의 맨 앞에 있는 데이터를 반환하고 제거합니다.
    if (this.empty()) {
      throw new Error("Queue is empty");
    }
    return this.q[++this.head];
  }

  front() {
    // 큐의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
    if (this.empty()) {
      throw new Error("Queue is empty");
    }
    return this.q[this.head + 1];
  }
}
```

### 원형 큐 (Circular Queue) 개념 도입

- 선형 큐의 메모리 낭비 문제를 해결하기 위해 배열의 시작과 끝을 이어 붙인 원형 구조를 활용합니다.

- 최대 크기(`MAX_SIZE`)를 제한하고 나머지 연산(`% MAX_SIZE`)을 사용하여, 더 이상 사용하지 않는 앞쪽 공간을 재사용할 수 있도록 개선합니다.

```javascript
const MAX_SIZE = 10000;

class Queue {
  constructor() {
    // 빈 큐 하나를 생성합니다.
    this.q = Array(MAX_SIZE).fill(0);
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    // 큐의 맨 뒤에 데이터를 추가합니다.
    if (this.full()) throw new Error("Queue is full");

    this.tail = (this.tail + 1) % MAX_SIZE;
    this.q[this.tail] = item;
  }

  full() {
    // 큐가 가득 차 있으면 true를 반환합니다.
    return (this.tail + 1) % MAX_SIZE === this.head;
  }

  empty() {
    // 큐가 비어있으면 true를 반환합니다.
    return this.head === this.tail;
  }

  size() {
    // 큐에 들어있는 데이터 수를 반환합니다.
    return (this.tail - this.head + MAX_SIZE) % MAX_SIZE;
  }

  pop() {
    // 큐의 맨 앞에 있는 데이터를 반환하고 제거합니다.
    if (this.empty()) throw new Error("Queue is empty");

    this.head = (this.head + 1) % MAX_SIZE;
    return this.q[this.head];
  }

  front() {
    // 큐의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
    if (this.empty()) throw new Error("Queue is empty");

    return this.q[(this.head + 1) % MAX_SIZE];
  }
}
```
