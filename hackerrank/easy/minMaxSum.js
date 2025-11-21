const calculteSum = (arr) => {
  return arr.reduce((acc, value) => {
    acc += value;
    return acc;
  }, 0);
};
function miniMaxSum(arr) {
  // Write your code here
  const sorted = [...arr].sort((a, b) => a - b);
  const minSum = calculteSum(sorted.slice(0, -1));
  const maxSum = calculteSum(sorted.slice(1));
  console.log(minSum, maxSum);
}
