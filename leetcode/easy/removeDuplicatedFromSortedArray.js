/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let unique_pointer = 0;

  for (let i = 1; i < nums.length; i++) {
    const unique_pointer_value = nums[unique_pointer];
    const rotate_pointer_value = nums[i];
    if (unique_pointer_value !== rotate_pointer_value) {
      unique_pointer++;
      nums[unique_pointer] = rotate_pointer_value;
    }
  }

  return unique_pointer + 1;
};
