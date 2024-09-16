function countingSort(arr) {
  // Write your code here
  const copyArr = [...arr];
  const frequencyArr = new Array(100).fill(0);
  copyArr.forEach((num) => {
    frequencyArr[num] += 1;
  });

  return frequencyArr;
}
