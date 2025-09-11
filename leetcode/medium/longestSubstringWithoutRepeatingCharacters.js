/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let leftIndex = 0;
  let maxLength = 0;
  const mySet = new Set();
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    while (mySet.has(value)) {
      mySet.delete(s[leftIndex]);
      leftIndex++;
    }
    mySet.add(value);
    maxLength = Math.max(maxLength, mySet.size);
  }

  return maxLength;
};
