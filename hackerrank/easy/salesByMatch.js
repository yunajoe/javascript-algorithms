function sockMerchant(n, ar) {
  // Write your code here
  const copyArr = [...ar];
  let cnt = 0;
  while (copyArr.length > 0) {
    let value = copyArr.shift();
    let index = copyArr.indexOf(value);
    if (index !== -1) {
      copyArr.splice(index, 1);
      cnt++;
    }
  }
  return cnt;
}
