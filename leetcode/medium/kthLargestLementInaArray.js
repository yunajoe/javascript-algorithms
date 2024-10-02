/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//   nums배열중에서 k번째로 큰 수를 return한다
// 숫자가 여러개면은 그것도 count하기
// sort 이용하지 않기

// arr에서 value가 있는지 확인하는 펑션
const getCount = (maxValue, arr) => {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxValue) {
      cnt++;
    }
  }
  return cnt;
};
var findKthLargest = function (nums, k) {
  let copyNums = [...nums];
  let copyK = k;
  if (copyK === 1) {
    return Math.max(...copyNums);
  }
  const maxNum = Math.max(...copyNums);
  const maxCnt = getCount(maxNum, copyNums);
  if (maxCnt === k) return maxNum;
  while (copyK !== 0) {
    //   copyK =  copyK - maxCnt

    copyNums = copyNums.filter((num) => num !== maxNum);
    const maxNum = Math.max(...copyNums);
    const maxCnt = getCount(maxNum, copyNums);
    if (maxCnt === k) return maxNum;
  }
};
