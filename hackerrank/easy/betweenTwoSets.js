const conditionA = (arr, value) => {
  const result = arr.every((ele) => value % ele === 0);
  return result;
};

const conditionB = (arr, value) => {
  const result = arr.every((ele) => ele % value === 0);
  return result;
};
function getTotalX(a, b) {
  // Write your code here
  const maxAvalue = Math.max(...a);
  const minBvalue = Math.min(...b);
  let n = 1;
  const arr = [];

  while (maxAvalue * n <= minBvalue) {
    let value = maxAvalue * n;
    const result1 = conditionA(a, value);
    if (!result1) {
      n++;
      continue;
    }
    const result2 = conditionB(b, value);
    if (result2) {
      arr.push(value);
    }
    n++;
  }
  return arr.length;
}
