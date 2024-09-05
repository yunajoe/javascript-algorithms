// sol1) time excceed
/**
 * @param {string} s
 * @return {string}
 */

const getTargetIndex = (copyString) => {
  let targetIndexes = [];
  for (let i = 0; i < copyString.length; i++) {
    if (copyString[i] === "*") {
      targetIndexes = [i - 1, i];
      break;
    }
  }
  return targetIndexes;
};

const removeLetterAndStar = (targetIndexes, copyString) => {
  let newStr = "";
  for (let i = 0; i < copyString.length; i++) {
    const [idx1, idx2] = targetIndexes;
    if (i !== idx1 && i !== idx2) {
      newStr += copyString[i];
    }
  }
  return newStr;
};

var removeStars = function (s) {
  const copyS = s;
  const isStarExist = copyS.indexOf("*");
  if (isStarExist === -1) return copyS;
  const targetIndexes = getTargetIndex(copyS);
  const removedString = removeLetterAndStar(targetIndexes, copyS);
  return removeStars(removedString);
};

// sol2)
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let index = 0;
  let newArr = [];
  while (index < s.length) {
    if (s.charAt(index) === "*") {
      newArr.pop();
    } else {
      newArr.push(s[index]);
    }
    index++;
  }
  return newArr.join("");
};
