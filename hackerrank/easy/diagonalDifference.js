function diagonalDifference(arr) {
  // Write your code here
  let endIndex = arr.length - 1;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let value1 = Number(arr[i][i]);
    let value2 = Number(arr[i][endIndex - i]);
    sum1 += value1;
    sum2 += value2;
  }

  return Math.abs(sum1 - sum2);
}
