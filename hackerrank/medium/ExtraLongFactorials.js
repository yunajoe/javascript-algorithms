function extraLongFactorials(n) {
  // Write your code here
  let sum = BigInt(1);
  for (let i = n; i >= 1; i--) {
    sum = sum * BigInt(i);
  }
  console.log(sum.toString().replace("n", ""));
}
