/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;

  // startIndex는  val인  지점을 의미한다.
  let startIndex = nums.findIndex((num) => num === val);

  // endIndex는 val가 아닌 지점을 의미한다.
  let endIndex = nums.findLastIndex((num) => num !== val);

  if (startIndex === -1) {
    return nums.length;
  }

  if (endIndex === -1) {
    return 0;
  }

  while (startIndex < endIndex) {
    let tempStartIndexvalue = nums[startIndex];
    nums[startIndex] = nums[endIndex];
    nums[endIndex] = tempStartIndexvalue;
    while (nums[startIndex] !== val) {
      startIndex++;
    }
    while (nums[endIndex] === val) {
      endIndex--;
    }
  }

  return startIndex;
};
