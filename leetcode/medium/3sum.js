/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// sol1) time limit exceeded가 나옴
const sortedArr2 = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });
};

// subArrr가 arr에 존재하면은 true가 적어도 하나 이상
// subArr가 arr에 존재하지ㅎ않으면은 all false이기 때문에 아래 결과값은  length == 0
const isDuplicated2 = (arr, subArr) => {
  return arr
    .map((item) => {
      return item.every((value) => subArr.includes(value));
    })
    .filter((item) => item);
};

var threeSum = function (nums) {
  const sortedNums = sortedArr2(nums);
  let pivotIndex = 0;
  //  [ -4, -1, -1, 0, 1, 2 ]
  let result = [];
  for (let i = pivotIndex; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] > 0) {
      return result;
    }
    let lowIndex = i + 1;
    let highIndex = sortedNums.length - 1;
    console.log("pivot", i, lowIndex, highIndex);
    while (lowIndex < highIndex) {
      let sum = sortedNums[i] + sortedNums[lowIndex] + sortedNums[highIndex];
      console.log("sum", sum, i, lowIndex, highIndex);
      if (sum > 0) {
        highIndex--;
      } else if (sum < 0) {
        lowIndex++;
      } else {
        // [-4, -1, -1, 0, 1, 2]
        const isAlreadyExists = isDuplicated(result, [
          sortedNums[i],
          sortedNums[lowIndex],
          sortedNums[highIndex],
        ]);
        if (isAlreadyExists.length === 0) {
          result = [
            ...result,
            [sortedNums[i], sortedNums[lowIndex], sortedNums[highIndex]],
          ];
        }
        lowIndex++;
        highIndex--;
      }
    }
  }

  return result;
};

//sol2)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// pass
const sortedArr = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });
};

// subArrr가 arr에 존재하면은 true가 적어도 하나 이상
// subArr가 arr에 존재하지ㅎ않으면은 all false이기 때문에 아래 결과값은  length == 0
const isDuplicated = (arr, subArr) => {
  return arr
    .map((item) => {
      return item.every((value) => subArr.includes(value));
    })
    .filter((item) => item);
};

var threeSum = function (nums) {
  const sortedNums = sortedArr(nums);
  let pivotIndex = 0;
  let result = [];
  for (let i = pivotIndex; i < sortedNums.length - 2; i++) {
    // pivot이 0보다 클때
    if (sortedNums[i] > 0) {
      break;
    }
    // pivot값이 이전과 같을 때
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    let lowIndex = i + 1;
    let highIndex = sortedNums.length - 1;
    while (lowIndex < highIndex) {
      let sum = sortedNums[i] + sortedNums[lowIndex] + sortedNums[highIndex];
      if (sum > 0) {
        highIndex--;
      } else if (sum < 0) {
        lowIndex++;
      } else {
        result = [
          ...result,
          [sortedNums[i], sortedNums[lowIndex], sortedNums[highIndex]],
        ];
        lowIndex++;
        highIndex--;
        while (
          lowIndex < highIndex &&
          sortedNums[lowIndex] === sortedNums[lowIndex - 1]
        ) {
          lowIndex++;
        }
        while (
          lowIndex < highIndex &&
          sortedNums[highIndex] === sortedNums[highIndex + 1]
        ) {
          highIndex++;
        }
      }
    }
  }

  return result;
};
