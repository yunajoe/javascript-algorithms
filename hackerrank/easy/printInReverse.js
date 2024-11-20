function reversePrint(llist) {
  // Write your code here
  let prev = null;
  let curr = llist;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  while (prev !== null) {
    console.log(prev.data);
    prev = prev.next;
  }
}
