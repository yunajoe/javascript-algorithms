function plusMinus(arr) {
  const length = arr.length;
  let positiveCnt = 0;
  let negativeCnt = 0;
  let zeroCnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCnt++;
    } else if (arr[i] < 0) {
      negativeCnt++;
    } else if (arr[i] === 0) {
      zeroCnt++;
    }
  }

  console.log(positiveCnt / length.toFixed(6));
  console.log(negativeCnt / length.toFixed(6));
  console.log(zeroCnt / length.toFixed(6));
}
