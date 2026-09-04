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
    // node1의 값을 붙일경우
    if (node2 == null || (node1 !== null && node1.val <= node2.val)) {
      let addedValue = node1.val;
      current.next = new ListNode(addedValue);
      current = current.next;
      node1 = node1.next;
    } else {
      // node2의 값을 붙일 경우
      let addedValue = node2.val;
      current.next = new ListNode(addedValue);
      current = current.next;
      node2 = node2.next;
    }
  }

  return head.next;
};
