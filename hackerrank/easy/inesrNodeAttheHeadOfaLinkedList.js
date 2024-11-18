function insertNodeAtHead(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  newNode.next = head;

  return newNode;
}
