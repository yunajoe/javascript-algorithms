/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // null인경우
  if (!head) return null;
  // 초기화
  let prevPointer = null;
  let currPointer = head;
  let nextPointer = null;

  while (currPointer) {
    nextPointer = currPointer.next;
    currPointer.next = prevPointer;
    prevPointer = currPointer;
    currPointer = nextPointer;
  }
  return prevPointer;
};
