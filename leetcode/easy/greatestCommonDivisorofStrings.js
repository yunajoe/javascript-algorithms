/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  // 첫글자가 아예 다를때
  if (str1[0] !== str2[0]) return "";

  let minLength = Math.min(str1.length, str2.length);
  let minStr = str1.length === minLength ? str1 : str2;
  let maxStr = minStr === str1 ? str2 : str1;
  // 2글자중 하나가 상대방의 최대공약수 일때
  if (minStr.repeat(minStr.length / maxStr) === maxStr) return minStr;

  // 최소 1글자는 맞는 상황을 전제로
  let lcmString = "";
  let result = [];

  for (let i = 0; i < minLength; i++) {
    if (str1[i] == str2[i]) {
      lcmString += str1[i];
      let dividerStr1 = str1.length / lcmString.length; // 3
      let dividerStr2 = str2.length / lcmString.length; // 2
      if (Number.isInteger(dividerStr1) && Number.isInteger(dividerStr2)) {
        if (
          lcmString.repeat(dividerStr1) === str1 &&
          lcmString.repeat(dividerStr2) === str2
        ) {
          result.push(lcmString);
        }
      }
    }
  }
  return result.length > 0 ? result[result.length - 1] : "";
};
