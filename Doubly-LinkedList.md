## 1. 이중 연결 리스트 개념

- **구조**: 각 노드가 **`Prev`(이전 노드)**, **`Data`(데이터)**, **`Next`(다음 노드)** 포인터를 모두 가지고 있는 자료구조입니다.
- **특징**: 단일 연결 리스트와 달리 양방향(앞/뒤)으로 이동이 가능합니다. 단, 탐색(Search) 시에는 일일이 노드를 방문해야 하므로 $O(N)$의 시간이 소요됩니다. 반면, 삽입(Insertion)과 삭제(Deletion)는 인접한 노드의 포인터만 갱신하면 되므로 $O(1)$의 시간이 걸립니다.

## 2. 주요 연산 및 알고리즘 정리

### 2-1 앞쪽에 삽입 (`insert_front`)

새로운 노드를 리스트의 맨 앞에 추가할 때의 과정입니다.

1. `new_node.next = DLL.head` (새 노드의 다음을 기존 head로 지정)
2. `new_node.prev = null` (새 노드는 맨 앞이므로 이전 포인터는 없음)
3. `DLL.head.prev = new_node` (기존 head의 이전을 새 노드로 연결)
4. `DLL.head = new_node` (head 포인터를 새 노드로 갱신)

### 2-2 뒤쪽에 삽입 (`insert_end`)

새로운 노드를 리스트의 맨 뒤에 추가할 때의 과정입니다.

1. `new_node.next = null` (새 노드가 맨 뒤이므로 다음 포인터는 없음)
2. `new_node.prev = DLL.tail` (새 노드의 이전을 기존 tail로 지정)
3. `DLL.tail.next = new_node` (기존 tail의 다음을 새 노드로 연결)
4. `DLL.tail = new_node` (tail 포인터를 새 노드로 갱신)

### 2-3 앞쪽 삭제 (`delete_front`)

리스트의 맨 앞 노드를 제거할 때의 과정입니다.

1. `DLL.head.next.prev = null` (새로 head가 될 다음 노드의 prev를 null로 끊어줌)
2. `DLL.head = DLL.head.next` (head 포인터를 다음 노드로 이동)

### 2-4 뒤쪽 삭제 (`delete_end`)

리스트의 맨 뒤 노드를 제거할 때의 과정입니다.

1. `DLL.tail.prev.next = null` (새로 tail이 될 이전 노드의 next를 null로 끊어줌)
2. `DLL.tail = DLL.tail.prev` (tail 포인터를 이전 노드로 이동)
