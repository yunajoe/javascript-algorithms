let startIndex = 0;
let totalArray = [];

function solution(sequence, k) {
  let sum = 0;
  const targetIndexArray = [];
  const copySequence = [...sequence];
  for (let i = startIndex; i < copySequence.length; i++) {
    let ele = copySequence[i];
    sum += ele;
    if (sum === k) {
      targetIndexArray.push(startIndex);
      targetIndexArray.push(i);
      if (totalArray.length === 0) {
        totalArray = [...totalArray, targetIndexArray];
      } else {
        const [prevStartIndex, prevEndIndex] = totalArray[0];
        const prevDiff = prevEndIndex - prevStartIndex;
        const currentDiff = i - startIndex;

        if (prevDiff > currentDiff) {
          totalArray.pop();
          totalArray = [...totalArray, targetIndexArray];
        }
      }
      startIndex++;
      solution(sequence, k);
    }

    if (sum > k) {
      startIndex++;
      solution(sequence, k);
    }
  }

  return totalArray.at(0);
}
