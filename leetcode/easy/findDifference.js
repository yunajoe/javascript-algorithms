/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const getCommonValues = (arr1, arr2) => {
  const result = arr1.filter((num) => !arr2.includes(num));
  return result;
};
const delteDuplicatedValue = (nums1, nums2) => {
  const set1 = new Set([...nums1]);
  const set2 = new Set([...nums2]);
  const arr1 = Array.from(set1);
  const arr2 = Array.from(set2);
  return {
    arr1,
    arr2,
  };
};
var findDifference = function (nums1, nums2) {
  const { arr1, arr2 } = delteDuplicatedValue(nums1, nums2);
  const result1 = getCommonValues(arr1, arr2);
  const result2 = getCommonValues(arr2, arr1);
  return [result1, result2];
};
