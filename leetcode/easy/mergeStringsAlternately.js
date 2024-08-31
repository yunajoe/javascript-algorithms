/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let maxStrLengthIdx = Math.max(word1.length, word2.length) - 1;
  let startIndx = 0;
  let answer = "";
  while (startIndx <= maxStrLengthIdx) {
    if (word1[startIndx]) {
      answer += word1[startIndx];
    }
    if (word2[startIndx]) {
      answer += word2[startIndx];
    }

    startIndx++;
  }

  return answer;
};
