function miniMaxSum(arr) {
  // Write your code here
  let answer = 0;
  let answer2 = 0;
  const asendingArr = [...arr].sort((a, b) => a - b);
  const desendingArr = [...arr].sort((a, b) => b - a);
  for (let i = 0; i <= 3; i++) {
    answer += asendingArr[i];
  }

  for (let i = 0; i <= 3; i++) {
    answer2 += desendingArr[i];
  }

  console.log(answer, answer2);
}
