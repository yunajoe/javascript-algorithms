function birthday(s, d, m) {
  // Write your code here
  const copyS = [...s];
  let index = 0;
  let cnt = 0;

  while (index <= copyS.length - m) {
    let subSum = 0;
    for (let j = index; j < index + m; j++) {
      subSum += copyS[j];
    }
    if (subSum === d) {
      cnt++;
    }
    subSum = 0;
    index++;
  }
  return cnt;
}
