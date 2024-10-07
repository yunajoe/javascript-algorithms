const swap = (arr, startIndex, endIndex) => {
  [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
  return arr;
};

const permutateArr = (arr, index) => {
  const totalArr = [];
  for (let i = index; i < arr.length; i++) {
    const result = swap([...arr], index, i);
    totalArr.push(result);
  }
  return totalArr;
};

function twoArrays(k, A, B) {
  // Write your code here
  const copyA = [...A]; // [2,1,3]
  let startIndex = 0;
  const newArr = permutateArr(copyA, startIndex);
  console.log("newArr", newArr);
  // [ [ 2, 1, 3 ], [ 1, 2, 3 ], [ 3, 1, 2 ] ]
}
