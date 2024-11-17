function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  if (head === null) {
    head = newNode;
    return head;
  }
  let tempHead = head;
  while (tempHead.next !== null) {
    tempHead = tempHead.next;
  }
  tempHead.next = newNode;

  return head;
}
