/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];
  const subArr = [];
  const copyNums = [...nums];
  let index = 0;

  function repeat(arr, index) {
    if (index >= arr.length) {
      return;
    }
    for (let i = index; i < arr.length; i++) {
      subArr.push(arr[i]);
      result.push([...subArr]);

      index++;

      repeat(copyNums, index);
      subArr.pop();
    }
  }
  // start!
  repeat(copyNums, index);
  return result;
};
