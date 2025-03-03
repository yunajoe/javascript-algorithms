/**
 * @param {string} s
 * @return {string[]}
 */

// Time limit exceeded
var findRepeatedDnaSequences = function (s) {
  let keyIndex = 0;
  let output = [];
  let subStringArr = [];
  for (let i = keyIndex; i <= s.length - 10; i++) {
    const subString = s.slice(i, i + 10);
    const result = subStringArr.includes(subString);
    if (result) {
      continue;
    }
    subStringArr = [...subStringArr, subString];
    let subIndex = i + 1;
    while (subIndex <= s.length - 10) {
      let compareString = s.slice(subIndex, subIndex + 10);
      if (subString === compareString) {
        output = [...output, subString];
        break;
      }
      subIndex++;
    }
  }
  return output;
};

// sol2)
/**
 * @param {string} s
 * @return {string[]}
 */
const map = new Map();
map.set("A", 1);
map.set("C", 2);
map.set("G", 3);
map.set("T", 4);

const calculateMap = (s) => {
  return s.split("").reduce((acc, letter, index, arr) => {
    let powValue = arr.length - 1 - index;
    const value = map.get(letter);
    if (!value) return acc;
    acc += map.get(letter) * Math.pow(value, powValue);
    return acc;
  }, 0);
};
var findRepeatedDnaSequences = function (s) {
  let startIndex = 0;
  let endIndex = 10;
  let results = [];
  let outputs = new Set();
  while (endIndex <= s.length) {
    let subString = s.slice(startIndex, endIndex);
    if (startIndex === 0) {
      outputs.add(subString);
    } else {
      const isAlreadyValue = outputs.has(subString);
      if (!isAlreadyValue) {
        outputs.add(subString);
      } else {
        const isAlready = results.includes(subString);
        if (!isAlready) {
          results = [...results, subString];
        }
      }
    }
    startIndex++;
    endIndex++;
  }

  return results;
};
