function pageCount(n, p) {
  const rows = Math.ceil((n + 1) / 2);
  const arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    const subArray = [];
    subArray.push(i * 2, i * 2 + 1);
    arr[i] = subArray;
  }
  let frontIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];
    if (subArray.includes(p)) {
      frontIndex = i;
      break;
    }
  }
  return Math.min(frontIndex, arr.length - 1 - frontIndex);
}
