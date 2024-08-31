/**
 * @param {number[]} nums
 * @return {number}
 */

const firstFunc = (arr) => {
  const copyArr1 = [...arr];
  const copyArr2 = [...arr];
  const mostLeftArr = copyArr1.slice(1);
  const mostRightArr = copyArr2.slice(0, arr.length - 1);
  return {
    mostLeftArr,
    mostRightArr,
  };
};

const reduceSum = (arr) => {
  const sum = arr.reduce((acc, item, idex) => {
    acc += item;
    return acc;
  }, 0);
  return sum;
};

var pivotIndex = function (nums) {
  const { mostLeftArr, mostRightArr } = firstFunc(nums);
  const sum1 = reduceSum(mostLeftArr);
  const sum2 = reduceSum(mostRightArr);
  if (sum1 === 0 || sum2 === 0) return 0;

  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let leftSum = 0;
  let rightSum = 0;
  leftSum += nums[leftIndex];
  rightSum += nums[rightIndex];
  while (true) {
    if (leftSum < rightSum) {
      leftIndex++;
      leftSum += nums[leftIndex];
    } else if (leftSum > rightSum) {
      rightIndex--;
      rightSum += nums[rightIndex];
    } else if (leftSum === rightSum) break;
  }

  if (rightIndex - leftIndex !== 1) {
    return rightIndex - leftIndex + 1;
  } else {
    return -1;
  }
};

//

/**
 * @param {number[]} nums
 * @return {number}
 */

const firstFunc = (arr) => {
  const copyArr1 = [...arr];
  const copyArr2 = [...arr];
  const mostLeftArr = copyArr1.slice(1);
  const mostRightArr = copyArr2.slice(0, arr.length - 1);
  return {
    mostLeftArr,
    mostRightArr,
  };
};

const reduceSum = (arr) => {
  const sum = arr.reduce((acc, item, idex) => {
    acc += item;
    return acc;
  }, 0);
  return sum;
};

var pivotIndex = function (nums) {
  const { mostLeftArr, mostRightArr } = firstFunc(nums);
  const sum1 = reduceSum(mostLeftArr);
  const sum2 = reduceSum(mostRightArr);
  if (sum1 === 0 || sum2 === 0) return 0;

  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let leftSum = 0;
  let rightSum = 0;

  while (leftIndex < rightIndex) {
    if (nums[leftIndex] === nums[rightIndex]) {
      leftIndex++;
      rightIndex--;
    } else if (nums[leftIndex] !== nums[rightIndex]) {
      break;
    }
  }

  if (leftIndex > rightIndex) return -1;

  leftSum += nums[leftIndex];
  rightSum += nums[rightIndex];

  while (leftIndex < rightIndex) {
    if (leftSum < rightSum) {
      leftIndex++;
      leftSum += nums[leftIndex];
    } else if (leftSum > rightSum) {
      rightIndex--;
      rightSum += nums[rightIndex];
    } else if (leftSum === rightSum) {
      break;
    }
  }
  if (rightIndex - leftIndex === 1) return -1;
  return (leftIndex + rightIndex) / 2;
};
