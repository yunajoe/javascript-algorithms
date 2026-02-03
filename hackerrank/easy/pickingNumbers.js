function pickingNumbers(a) {
  a.sort((a, b) => a - b);
  let maxLength = 0;
  let maxPointer = a.length - 1;
  for (let i = 0; i < a.length - 1; i++) {
    if (i > 0) {
      if (a[i] === a[i - 1]) continue;
    }
    const pivot = a[i];
    const allowedNum = pivot + 1;
    while (i < maxPointer) {
      if (a[maxPointer] <= allowedNum) {
        break;
      }
      maxPointer--;
    }

    maxLength = Math.max(maxLength, maxPointer - i + 1);
    maxPointer = a.length - 1;
  }
  return maxLength;
}
