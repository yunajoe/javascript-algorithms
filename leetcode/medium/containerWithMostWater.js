/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 왼쪽인덱스, 오른쪽인덱스 시작
  // 왼쪽인덱스에서 바로 옆에 있는 애랑 비교한다.
  // 옆에 있으니까 width는 1차이이니까. .height,비교.. 처음의 height는 1이고 다음 height는 8.. 즉, 7차이가 난다. (1<7) 왼쪽인덱스는 옆 인덱스로 이동
  // 이제 기준 인덱스는
  // (2,8) & (9,7)
  // 이제 오른쪽인덱스도 비교한다 (9,7) && (8,3)
  //  오른쪽인덱스는 (_,7) 하고 (_,3) 만 비교를 한다
  // 왼쪽기준 인덱스의 높이인 8보다 같거나 작은 것 중에서  max(7,3)... 7이니까 그대로
  //   만약에 왼쪽기준 인덱스의 높이인 8보다 크다면은? (8,100)이라고 한다면은?
  // 왼쪽기준 인덱스의 높이보다 큰다면은.. 그냥 왼쪽기준의 높이로 한다 (8)
  //  오른쪽 (9,7)이랑 (8,100)  => (9,7) 이랑 (8,8)
  //  (2,8) 이랑 (9,7)
  // (2,8)이랑 (8,8) =
  // [5,3,....7]
  // (1,5)
  // (2,3)
  let leftIndex = 0;
  let rightIndex = height.length - 1; // 8
  while (leftIndex < rightIndex) {
    let nextLeftIndex = leftIndex + 1;
    if (
      Math.abs(height[leftIndex] - height[nextLeftIndex]) >
      Math.abs(leftIndex - nextLeftIndex)
    ) {
      leftIndex++; // 1  => (1,8)
    }
    let beforeRightIndex = rightIndex - 1; // 7 (7,3)

    if (height[leftIndex] >= height[rightIndex]) {
      if (
        Math.abs(height[rightIndex] - height[beforeRightIndex]) >
        Math.abs(rightIndex - beforeRightIndex)
      ) {
        continue;
      } else {
        rightIndex--;
      }
    }
  }

  return [leftIndex, rightIndex];
};
