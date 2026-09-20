const findMinTarget = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let minIndex = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      // 타겟을 찾았을 때: 첫 번째 위치를 찾아야 하므로 일단 기록하고 왼쪽을 더 탐색
      minIndex = mid;
      end = mid - 1;
    }
  }
  return minIndex;
};

const findMaxTarget = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let maxIndex = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      // 타겟을 찾았을 때: 마지막 위치를 찾아야 하므로 일단 기록하고 오른쪽을 더 탐색
      maxIndex = mid;
      start = mid + 1;
    }
  }
  return maxIndex;
};

var searchRange = function (nums, target) {
  const minIndex = findMinTarget(nums, target);
  const maxIndex = findMaxTarget(nums, target);

  return [minIndex, maxIndex];
};
