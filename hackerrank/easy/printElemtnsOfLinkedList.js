/**
 *  
 *printLinkedList로 넘겨지는 head는 아래와 같은 모습이다
 * 
 * 
 * SinglyLinkedListNode {
    data: 16,
    next: SinglyLinkedListNode { data: 13, next: null }
 }
 *
 */

function printLinkedList(head) {
  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}
