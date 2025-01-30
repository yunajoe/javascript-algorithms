//  해당 index를 return
const binarySearch = (arr, targetNumber) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex + 1 < rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] === targetNumber) return midIndex;

    if (arr[midIndex] < targetNumber) {
      leftIndex = midIndex;
    }
    if (arr[midIndex] > targetNumber) {
      rightIndex = midIndex;
    }
  }

  if (arr[leftIndex] === targetNumber) {
    return leftIndex;
  }

  if (arr[rightIndex] === targetNumber) {
    return rightIndex;
  }

  return -1;
};

const nums = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

// console.log(`Index of 37 is ---> ${binarySearch(nums, 37)}`);
// console.log(`Index of 1 is ---> ${binarySearch(nums, 1)}`);
// console.log(`Index of 59 is ---> ${binarySearch(nums, 59)}`);
// console.log(`Index of 25 is ---> ${binarySearch(nums, 25)}`);
