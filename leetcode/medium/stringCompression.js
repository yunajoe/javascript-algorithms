/**
 * @param {character[]} chars
 * @return {number}
 */

const checkLastLetter = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = Number(str[i]);
    if (!result) {
      result += str[i];
    }
  }
  return result;
};
var compress = function (chars) {
  let s = chars[0];
  let charCnt = 1;
  for (let i = 1; i < chars.length; i++) {
    // charCnt++; // 2
    let onlyLetter = checkLastLetter(s);
    let lastLetter = onlyLetter[onlyLetter.length - 1]; // b
    if (lastLetter !== chars[i]) {
      // 연속적이지 않을때
      s += charCnt;
      s += chars[i];
      charCnt = 1;
    } else {
      charCnt++;
    }
  }
  const arr = (s + charCnt).split("");
  return arr;
};

const arr = ["a", "a", "b", "b", "c", "c", "c"];
const chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
const result = compress(chars);
console.log("rrr", result);
