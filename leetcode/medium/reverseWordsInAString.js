/**
 * @param {string} s
 * @return {string}
 */
// solution 1
var reverseWords = function (s) {
  const arr = s
    .trim()
    .split(" ")
    .filter((item) => item);
  return arr.reverse().join(" ");
};

// solution 2
/**
 * @param {string} s
 * @return {string}
 */

const isBlank = (s) => {
  const regex = /\s+/g;
  return regex.test(s);
};

const reverseString = (s) => {
  return [...s].reverse().join("");
};

var reverseWords = function (s) {
  const reversedStr = s.split("").reverse().join("");
  let word = "";
  let startIndex = 0;
  let answer = "";
  for (let i = startIndex; i < reversedStr.length; i++) {
    let endIndex = i + 1;
    let startValue = reversedStr[i];
    let endValue = reversedStr[endIndex];

    if (
      (isBlank(endValue) && word.length > 0) ||
      (i === reversedStr.length - 1 && word.length > 0)
    ) {
      word += startValue;
      const reversedWrod = reverseString(word);
      console.log("reversedWrod ", reversedWrod);
      answer += reversedWrod + " ";
      word = "";
      continue;
    } else if (!isBlank(startValue)) {
      console.log("startValue2222", startValue, endValue, i);
      word += startValue;

      if (i === reversedStr.length - 1) {
        const reversedWrod = reverseString(word);
        answer += reversedWrod + " ";
      }
    }
  }

  return answer.trim();
};
