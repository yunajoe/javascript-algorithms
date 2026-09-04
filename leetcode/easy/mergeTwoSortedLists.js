/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  let current = head;
  let node1 = list1;
  let node2 = list2;

  while (node1 !== null || node2 !== null) {
    let addedValue;

    // 1를 붙일 경우
    if (node2 === null || (node1 !== null && node1.val <= node2.val)) {
      addedValue = node1.value;
      node1 = node1.next;
    } else {
      // 2를 붙일 경우
      addedValue = node2.val;
      node2 = node2.next;
    }

    current.next = new ListNode(addedValue);
    current = current.next;
  }

  return head.next;
};
